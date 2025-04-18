const mongoose = require('mongoose')
var User = require("../model/userModel.js");
var Otp = require("../model/otpModel.js");
const { validationResult } = require('express-validator');
var commonUtils = require('../utils/commonUtils')
var authValidation = require('../middleWare/authValidation')
const bcrypt = require('bcrypt')
const { MongoClient } = require('mongodb');

// This function is used to sign in a user account with an email and password.
exports.signIn = function (req, res) {
  let filter = req.body.email ? { email: req.body.email } : { number: req.body.number }
  User.findOne(filter).then((user) => {
    if(!user) {
      res.status(400).json({
        status:false,
        message:`We can't find an account with ${req.body.email ? req.body.email : req.body.number}. Try another ${req.body.email ? 'email address' : 'mobile number'}`,
      })
    } else if(user.comparePassword(req.body.password, (error,match) =>{
      if (!match) {
        res.status(400).json({
          status:false,
          message:"Incorrect password",
          token:null,
        })
      } else{
        let token = commonUtils.generateToken({
          id: user._id,
          username: user.username,
          email: user.email,
          image: user.image
        })
        res.status(200).json({
          status:true,
          message:"Successfully Login",
          usertype: user.usertype,
          token,
        })
      }
    }));
  })
}

// This function is used to send a one-time password to the user's contact.
exports.generateOTP = async function (req, res) {
  console.log("===== REQUEST RECIVED 1 =====", req.body);
  if (req.body.type !== "register" && req.body.type !== "update") {
    return res.status(400).json({
      status:false,
      message:"Invalid request type"
    })
  }
  if (req.body.type === "register") {
    const registeredUser = await User.findOne({ number: req.body.number })
    console.log("===== REGISTERED USER =====", registeredUser);
    if (registeredUser) {
      return res.status(400).json({
        status:false,
        message:"This number or email already exists!!!"
      })
    }
  }
  let otpCode = commonUtils.generateOTP();
  var otp = new Otp({
    number: req.body.number,
    otp: otpCode,
    type: req.body.type,
  });
  otp.save().then((result) => {
    res.status(200).json({
      status:true,
      message:`Verification code is ${otpCode}`,
    })
  }).catch((error) => {
    console.log("--- ERROR -----", error);
    res.status(500).json({
      status:false,
      message:"An error occurred while inserting OTP records."
    })
  })
}

// This function is used to verify the one-time password and register user accounts.
exports.signUp = async function (req, res) {
  const verifyOtp = await isOtpMatched(req.body.number, req.body.otp)
  if (!verifyOtp.status) {
    return res.status(verifyOtp.statusCode).json({ status: false, message: verifyOtp.message });
  }
  var user = new User({
    username: req.body.username,
    email: req.body.email,
    number: req.body.number,
    usertype: req.body.usertype,
    password:req.body.password,
    image: "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",
  });
  user.save().then(async (result) => {
      await Otp.deleteMany({ number: req.body.number });
      let token = commonUtils.generateToken({
        id: result._id,
        username: result.username,
        email: result.email,
        image: result.image
      })
      res.status(200).json({
        status:true,
        message:"Successfully Registered",
        token,
      })
    }).catch((error) => {
      res.status(500).json({
        status:false,
        message:"An error occurred while registering users.",
        token:null,
      })
    })
};

// This function is used to list users.
exports.listUsers = async function (req, res) {
  const isAdmin = await commonUtils.isAdmin(req.decoded.userId);
  const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
  const limit = parseInt(req.query.limit) || 10; // Default to 10 if not provided
  const skip = (page - 1) * limit;
  let filter = isAdmin ? {} : {_id: req.decoded.userId}
  const [users, totalUsers] = await Promise.all([
    User.find(filter).sort({createdAt: -1}).skip(skip).limit(limit),User.countDocuments(),
  ]);
  let usersList = []
  for (let i = 0; i < users.length; i++) {
    usersList.push({
      id: users[i]._id,
      username: users[i].username,
      email: users[i].email,
      number: users[i].number,
      usertype: users[i].usertype,
      image: users[i].image,
    })
  }
  res.status(200).json({
    status:true,
    message:"Successfully retrieved the users list",
    users: usersList,
    totalCount: totalUsers,
  })
};

// This function is used to delete users.
exports.deleteUsers = async function (req, res) {
  try {
    if (await commonUtils.isAdmin(req.decoded.userId)) {
      const users = req.body.userids.trim().split(",");
      const objectIds = users.map((id) => new mongoose.Types.ObjectId(id.trim()));
      User.deleteMany({ _id: { $in: objectIds } }).then((result) => {
        res.status(200).json({
          status:true,
          message:`${result.deletedCount} user(s) deleted successfully`,
        })
      }).catch((error) => {
        res.status(400).json({
          status:false,
          message:"An error occurred while deleting users.",
        })
      })
    } else {
      res.status(400).json({
        status:false,
        message:"Access denied",
      })
    }
  } catch (error) {
    res.status(500).json({
      status:false,
      message:"Internal server error",
      token:null,
    })
  }
};

// This function is used to update users information.
exports.updateUserInfo = async function (req, res) {
  User.updateOne({ _id: req.decoded.userId }, { $set: {
    username: req.body.username,
    // password: bcrypt.hashSync(req.body.password, 10),
    // image: req.body.image,
  }}).then((result) => {
    let token = commonUtils.generateToken({
      id: req.decoded.userId,
      username: req.body.username,
    })
    res.status(200).json({
      status:true,
      message:`Successfully updated user information`,
      token,
    })
  }).catch((error) => {
    console.log("UPDATE ERROR", error);
    res.status(500).json({
      status:false,
      message:"An error occurred while updating user information.",
      token:null,
    })
  })
};
// This function is used to update users information.
exports.updateContactInfo = async function (req, res) {
  const verifyOtp = await isOtpMatched(req.body.number, req.body.otp)
  if (!verifyOtp.status) {
    return res.status(verifyOtp.statusCode).json({ status: false, message: verifyOtp.message });
  }
  let updateData = {number: req.body.number, email: req.body.email, password: bcrypt.hashSync(req.body.password, 10)}
  User.updateOne({ _id: req.decoded.userId }, { $set: {updateData}}).then((result) => {
    res.status(200).json({
      status:true,
      message:`Successfully updated user contact information`,
    })
  }).catch((error) => {
    res.status(500).json({
      status:false,
      message:"This number or email already exists.",
    })
  })
};

const isOtpMatched = async(number, otp) => {
  const otpRecord = await Otp.findOne({ number }).sort({ createdAt: -1 });
    if (!otpRecord) {
      return { status: false, message: 'OTP not found or expired', statusCode: 404 };
    }
    const isMatch = await otpRecord.verifyOtp(otp);
    if (!isMatch) {
      return { status: false, message: 'Invalid OTP', statusCode: 400};
    }
    return {status: true}
}