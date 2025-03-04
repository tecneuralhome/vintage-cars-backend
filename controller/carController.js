const Car = require("../model/carModel.js");
const Slider = require("../model/sliderModel.js");
const Booking = require("../model/bookingModel.js");
const commonUtils = require('../utils/commonUtils');
const fs = require('fs');
const path = require('path');

const recoveryVanCharge = 100;

// This function is used to register car information.
exports.registerCarInfo = async function (req, res) {
	if (req.files && req.files.length > 0 && await commonUtils.isAdmin(req.decoded.userId)) {
		let fileNames = []
		req.files.forEach((file) => {
          fileNames.push(file.path);
        });
        console.log("req.body", req.body)
		var carInfo = new Car({
			name: req.body.name,
		    model: req.body.model,
		    price: req.body.price,
		    brand: req.body.brand,
		    color: req.body.color,
		    image: fileNames,
		    pagecontent: req.body.about_car,
			status: req.body.status,
		});
		carInfo.save().then(async (result) => {
			console.log("CAR INFO RESULT", result);
			res.status(200).json({
				status:true,
	        	message:"Successfully Registered",
	      	})
	    }).catch((error) => {
	    	console.log("error", error);
	      res.status(500).json({
	        status:false,
	        message:"An error occurred while registering car info.",
	      })
	    })	
	} else {
		res.status(400).json({
			status:false,
        	message: !req.files ? "Image data is required" : "Access denied",
        })
	}
}

// This function is used to store slider information.
exports.registerSliderInfo = async function (req, res) {
	if (req.file && await commonUtils.isAdmin(req.decoded.userId)) {
		Slider.findOne({ position: req.body.position }).then((result) => {
			if (result) {
				return res.status(400).json({
					status:false,
	        		message:"The position has already been registered. Please choose another position or delete the existing slide.",
	        	})
			}
			var sliderInfo = new Slider({
			    image: req.file.path,
				position: req.body.position,
			});
			sliderInfo.save().then(async (result) => {
				res.status(200).json({
					status:true,
		        	message:"Successfully Registered",
		      	})
		    }).catch((error) => {
		      res.status(500).json({
		        status:false,
		        message:"An error occurred while registering slider info.",
		      })
		    })
		}).catch((error) => {
			return res.status(500).json({
	        status:false,
	        message:"An error occurred while getting existing slider info.",
	      })
		})
	} else {
		res.status(400).json({
			status:false,
        	message: !req.file ? "Image data is required" : "Access denied",
        })
	}
}

// This function is used to getting a car info list with and without a filter.
exports.getCarsInfo = async function (req, res) {
	// Build the filter object dynamically
	const filter = req.query.id ? { _id: req.query.id } : {};
	const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
    const limit = parseInt(req.query.limit) || 10; // Default to 10 if not provided
    const skip = (page - 1) * limit;
    const [result, totalCars] = await Promise.all([
        Car.find(filter).sort({createdAt: -1}).skip(skip).limit(limit),Car.countDocuments(),
    ]);
    let carsList = []
    for (let i = 0; i < result.length; i++) {
    	carsList.push({
    		id: result[i]._id,
			name: result[i].name,
			model: result[i].model,
			price: result[i].price,
			brand: result[i].brand,
			color: result[i].color,
			image: result[i].image,
			pagecontent: result[i].pagecontent,
			status: result[i].status,
			createdAt: result[i].createdAt,
		})
    }
    res.status(200).json({
    	status:true,
    	message:"Successfully retrieved the car's info list.",
		cars: carsList,
		totalCount: totalCars,
	})
}
// This function is used to get a sliders info list.
exports.getSlidersInfo = async function (req, res) {
	Slider.find().then((result) => {
		let slidersList = []
		for (let i = 0; i < result.length; i++) {
			slidersList.push({
				id: result[i]._id,
				image: result[i].image,
				position: result[i].position,
				createdAt: result[i].createdAt,
			})
		}
		res.status(200).json({
			status:true,
			message:"Successfully retrieved the sliders list",
			slides: slidersList,
		})
	}).catch((error) => {
		return res.status(500).json({
			status:false,
			message:"An error occurred while getting the sliders info list.",
		})
	})
}
// This function is used to delete a slider's info..
exports.deleteSliderInfo = async function (req, res) {
	if (await commonUtils.isAdmin(req.decoded.userId)) {
		Slider.deleteOne({ position: req.body.position }).then((result) => {
			res.status(200).json({
				status:true,
				message: `${result.deletedCount} Slider info is deleted successfully.`,
			})
		}).catch((error) => {
			return res.status(500).json({
				status:false,
				message:"An error occurred while deleting the slider info.",
			})
		})
	} else {
		res.status(400).json({
			status:false,
        	message: "Access denied",
        })
	}
}
// This function is used to delete a car's info..
exports.deleteCarInfo = async function (req, res) {
	if (await commonUtils.isAdmin(req.decoded.userId)) {
		Car.deleteOne({ _id: req.body.id }).then((result) => {
			res.status(200).json({
				status:true,
				message: `${result.deletedCount} Car info is deleted successfully.`,
			})
		}).catch((error) => {
			return res.status(500).json({
				status:false,
				message:"An error occurred while deleting the car info.",
			})
		})
	} else {
		res.status(400).json({
			status:false,
        	message: "Access denied",
        })
	}
}

// This function is used to register car information.
exports.booking = async function (req, res) {
	const distance = await commonUtils.getDistance(req.body.from, req.body.to);
	let amount = await getPricingByName(req.body.carname);
	if (distance > 100) amount += recoveryVanCharge;
	if (distance === 0 || amount === 0) {
		res.status(400).json({
			status: false,
			message: amount === 0 ? "Car information not found" : "Location not found",
	    })
	}
	var bookingInfo = new Booking({
		name: req.body.name,
		email: req.body.email,
		number: req.body.number,
		eventdate: req.body.eventdate,
		from: req.body.from,
		to: req.body.to,
		carname: req.body.carname,
		amount: amount,
		isread: false,
	});
	bookingInfo.save().then(async (result) => {
		res.status(200).json({
			status: true,
	        message: "Car booked successfully! Details are on their way to your inbox.",
	    })
	}).catch((error) => {
		res.status(500).json({
			status: false,
	        message: "Oops! Something went wrong with your booking. Kindly retry.",
	    })
	})
}

// This function is used to register car information.
exports.bookingList = async function (req, res) {
	if (await commonUtils.isAdmin(req.decoded.userId)) {
		const filter = req.query.carname ? { carname: req.query.carname } : {};
		if (req.query.from || req.query.to) {
			filter.createdAt = {};
			if (req.query.from) {
				filter.createdAt.$gte = new Date(req.query.from); // From date (greater than or equal)
			}
	        if (req.query.to) {
	          filter.createdAt.$lte = new Date(req.query.to); // To date (less than or equal)
	        }
      	}
		const page = parseInt(req.query.page) || 1; // Default to page 1 if not provided
	    const limit = parseInt(req.query.limit) || 10; // Default to 10 if not provided
	    const skip = (page - 1) * limit;
	    const [result, totalBooking] = await Promise.all([
	        Booking.find(filter).sort({createdAt: -1}).skip(skip).limit(limit),Booking.countDocuments(),
	    ]);
	    let bookinglist = []
	    for (let i = 0; i < result.length; i++) {
	    	bookinglist.push({
	    		id: result[i]._id,
				name: result[i].name,
				email: result[i].email,
				number: result[i].number,
				eventdate: result[i].eventdate,
				from: result[i].from,
				to: result[i].to,
				carname: result[i].carname,
				amount: result[i].amount,
				isread: result[i].isread,
				createdAt: result[i].createdAt,
			})
		}
		res.status(200).json({
			status: true,
			message: "Successfully retrieved the booking list.",
			bookinglist,
			totalCount: totalBooking,
		})
	} else {
		res.status(400).json({
			status:false,
			message: "Access denied",
		})
	}
}

const getPricingByName = async(carName) => {
	let result = await Car.findOne({ name: carName });
	return result ? result.price : 0
}

// This function is used to register car information.
exports.updateCarInfo = async function (req, res) {
	if (await commonUtils.isAdmin(req.decoded.userId)) {
        let updatedData = {
        	name: req.body.name,
        	model: req.body.model,
		    price: req.body.price,
		    brand: req.body.brand,
		    color: req.body.color,
		    pagecontent: req.body.about_car,
			status: req.body.status,
		}
		if (req.files && req.files.length > 0) {
			const [result] = await Promise.all([Car.findOne({_id: req.body.id}),]);
			let fileNames = result && result.image ? result.image : [];
			req.files.forEach((file) => {
				fileNames.push(file.path);
			});
			updatedData.image = fileNames;
		}
        Car.updateOne({ _id: req.body.id }, { $set: updatedData}).then((result) => {
		    res.status(200).json({
		      status:true,
		      message:`Successfully updated car information`,
		    })
		}).catch((error) => {
			console.log("UPDATE CAR INFO ERROR", error);
			res.status(500).json({
				status:false,
				message:"An error occurred while updating car information.",
			})
		})	
	} else {
		res.status(400).json({
			status:false,
        	message: "Access denied",
        })
	}
}
// This function is used to car information image.
exports.deleteCarInfoImage = async function (req, res) {
	if (await commonUtils.isAdmin(req.decoded.userId)) {
		const [carData] = await Promise.all([
			Car.findOne({_id: req.body.id}),
		]);
		console.log("==== CAR DATA", carData);
		let updatedData = []
	    for (let i = 0; i < carData.image.length; i++) {
	    	if (carData.image[i] !== req.body.imagePath) {
	    		updatedData.push(carData.image[i])
	    	}
		}
		console.log("updatedData =====", updatedData)
		Car.updateOne({ _id: req.body.id }, { $set: {image: updatedData}}).then((deleteResult) => {
			const result = commonUtils.deleteImage(req.body.imagePath);
			console.log("result", result)
			res.status(result.status ? 200 : result.err ? 500 : 400).json({
				status:false,
				message: result.err ? result.err : result.message,
			})
		}).catch((error) => {
			console.log(" ====== error", error)
			res.status(500).json({
				status:false,
				message:"An error occurred while updating car information.",
			})
		})
	} else {
		res.status(400).json({
			status:false,
			message: "Access denied",
		})
	}
}

const updateAllData = async () => {
    const [result, totalCars] = await Promise.all([
        Car.find({}).sort({createdAt: -1}),Car.countDocuments(),
    ]);
	console.log("result", result);
    for (let i = 0; i < result.length; i++) {
		Car.updateOne({ _id: result[i]._id }, { $set: {
    		id: result[i]._id,
			name: result[i].name,
			model: result[i].model,
			price: result[i].price,
			brand: result[i].brand,
			color: result[i].color,
			image: result[i].image,
			pagecontent: result[i].pagecontent,
			createdAt: result[i].createdAt,
			status: 1,
		}}).then((result) => {
		    console.log("===== UPDATA RESULT =====", result);
		}).catch((error) => {
			console.log("===== UPDATA ERROR =====", error);
		})	
    }
}
// updateAllData()