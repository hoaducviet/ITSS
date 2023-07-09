const express = require('express');
const router = express.Router();
const userHomeController = require('../app/controllers/user/UserHomeController');
const userRegisterController = require('../app/controllers/user/UserRegisterController');
const userProfileController = require('../app/controllers/user/UserProfileController');
const userMedicalController = require('../app/controllers/user/UserMedicalController');

router.get('/home', userHomeController.home);
router.get('/home/chart', userHomeController.homeChart);

router.get('/register', userRegisterController.register);
router.get('/register/injection', userRegisterController.registerInjection);

router.get('/register/doctor', userRegisterController.registerDoctor);



router.get('/profile', userProfileController.profile);
router.get('/profile/update', userProfileController.profileUpdate);

router.get('/medical', userMedicalController.medical);
router.get('/medical/info', userMedicalController.medicalInfo);
router.get('/medical/info/update', userMedicalController.medicalInfoUpdate);

module.exports = router;
