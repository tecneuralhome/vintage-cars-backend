const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const config = require("../config/config")
var User = require("../model/userModel.js");
const geolib = require("geolib");
const axios = require("axios");

// This function used to generate a random 6-digit OTP
exports.generateOTP = () => {
    return crypto.randomInt(100000, 999999);
};

// This function used to generate a JWT token
exports.generateToken = (params) => {
    return jwt.sign({
        userId:params.id,
        username:params.username,
        date: Date.now(),
    },config.authorizationSecretkey,{expiresIn: '48h'})
}

// This function is used to validate admin access.
exports.isAdmin = async(id) => {
    const user = await User.findOne({ _id: id });
    if (user && user.usertype === "admin") {
        return true;
    }
    return false;
};

const getCoordinates = async(location) => {
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`;
    try {
        const response = await axios.get(url);
        if (response.data.length > 0) {
            const { lat, lon } = response.data[0];
            return { latitude: parseFloat(lat), longitude: parseFloat(lon) };
        } else {
            return null;
        }
    } catch (error) {
        return null;
    }
}
const getDistance = async(from, to) => {
    const fromLocation = await getCoordinates(from);
    const toLocation = await getCoordinates(to);
    if (!fromLocation || !toLocation) return 0;
    const distanceInKilometers  = geolib.getDistance(fromLocation, toLocation) / 1000;
    return distanceInKilometers;
};

exports.deleteImage = (imagePath) => {
    const fullPath = path.join(__dirname, imagePath);
    console.log("===== IMAGE FILE EXIST CHECK =====", fs.existsSync(fullPath));
    if (!fs.existsSync(fullPath)) {
        return {
            status: false,
            message: "Image file does not exist"
        }
    }
    fs.unlink(fullPath, (err) => {
        if (err) {
            console.error('Error deleting IMAGE file:', err);
            return {
                status: false,
                error: `Error deleting file ${err}`
            }
        }
        return {
            status: true,
            message: "File deleted successfully"
        }
    });
}