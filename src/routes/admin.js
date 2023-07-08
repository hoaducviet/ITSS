const express = require('express');
const router = express.Router();
const adminHomeController = require('../app/controllers/admin/AdminHomeController');
const adminListRegisterController = require('../app/controllers/admin/AdminListRegisterController');
const adminChartController = require('../app/controllers/admin/AdminChartController');
const adminListUserController = require('../app/controllers/admin/AdminListUserController');
const adminInjectionController = require('../app/controllers/admin/AdminInjectionController');

router.get('/home', adminHomeController.home);
router.get('/register', adminListRegisterController.listRegister);
router.get('/profile/mom', adminListRegisterController.momProfile);
router.get('/profile/baby', adminListRegisterController.babyProfile);
router.get('/profile/baby/add', adminListRegisterController.addBabyProfile);
router.get('/chart', adminChartController.chart);
router.get('/list', adminListUserController.listUser);
router.get('/injection', adminInjectionController.injection);
router.get('/injection/add', adminInjectionController.injectionAdd);

module.exports = router;
