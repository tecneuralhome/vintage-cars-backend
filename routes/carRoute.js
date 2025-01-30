var express = require('express');
var router = express.Router();
var authValidation = require('../middleWare/authValidation')
var carModuleValidation = require('../middleWare/carModuleValidation')
var controller = require('../controller/carController')
var path = require('path');
var multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
    	let folderName = (req.originalUrl === "/cars/register-car-info" || req.originalUrl === "/cars/update-car-info") ? "carImages" : "sliderImages"
        cb(null, folderName);
    },
    filename: (req,file,cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        console.log("===== MIME TYPE =====", file.mimetype);
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "image/gif" || file.mimetype == "video/mp4") {
            cb(null, true);
        } else {
            return cb('Only .png, and .jpg and .jpeg and .gif and .mp4 format allowed', false);
        }
    },
    limits:{ fileSize: 70 * 1024 * 1024}
});

router.post('/register-car-info', authValidation, upload.array("images"), carModuleValidation.carInfoValidation, controller.registerCarInfo);
router.put('/update-car-info', authValidation, upload.array("images"), carModuleValidation.carInfoValidation, controller.updateCarInfo);
router.post('/register-slider-info', authValidation, upload.single("images"), carModuleValidation.sliderInfoValidation, controller.registerSliderInfo);
router.get('/car-list', controller.getCarsInfo);
router.get('/slider-list', authValidation, controller.getSlidersInfo);
router.delete('/delete-slider-info', authValidation, controller.deleteSliderInfo);
router.post('/delete-car-info', authValidation, controller.deleteCarInfo);
router.post('/booking', authValidation, carModuleValidation.bookingValidation, controller.booking);
router.get('/booking-list', authValidation, controller.bookingList);
module.exports = router