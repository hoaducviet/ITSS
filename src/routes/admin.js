const express = require('express');
const router = express.Router();
const adminHomeController = require('../app/controllers/admin/AdminHomeController');
const adminRegisterController = require('../app/controllers/admin/AdminRegisterController');
const adminChartController = require('../app/controllers/admin/AdminChartController');
const adminUserController = require('../app/controllers/admin/AdminUserController');
const adminInjectionController = require('../app/controllers/admin/AdminInjectionController');

router.get('/home', adminHomeController.home);

router.get('/register', adminRegisterController.registerList);
router.get('/register/injection', adminRegisterController.registerInjection);
router.get('/register/seeadoctor', adminRegisterController.registerSeeADoctor);




router.get('/chart', adminChartController.chart);
router.get('/user', adminUserController.userList);
router.get('/user/info', adminUserController.userInfo);
router.get('/user/info/update', adminUserController.userInfoUpdate);
router.get('/user/info/medical', adminUserController.userInfoMedical);
router.get('/user/info/medical/update', adminUserController.userInfoMedicalUpdate);



router.get('/injection', adminInjectionController.injection);
router.get('/injection/add', adminInjectionController.injectionAdd);
router.post('/injection/store', adminInjectionController.store);
router.delete('/injection/:id', adminInjectionController.delete);
router.get('/injection/info/:id', adminInjectionController.injectionInfo);
router.get('/injection/edit/:id', adminInjectionController.injectionEdit);
router.put('/injection/update/:id', adminInjectionController.injectionUpdate);

module.exports = router;
