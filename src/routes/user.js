const express = require('express');
const router = express.Router();
const userHomeController = require('../app/controllers/user/UserHomeController');
const userCalendarController = require('../app/controllers/user/UserCalendarController');
const userProfileController = require('../app/controllers/user/UserProfileController');

router.get('/home', userHomeController.home);
router.get('/calendar', userCalendarController.calendar);

router.get('/register/injection', userCalendarController.registerInjection);
router.get('/register/doctor', userCalendarController.registerDoctor);


router.get('/profile', userProfileController.profile);
router.get('/profile/update', userProfileController.profileNoUpdate);

module.exports = router;
