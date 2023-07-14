const express = require('express');
const router = express.Router();
const adminHomeController = require('../app/controllers/admin/AdminHomeController');
const adminRegisterController = require('../app/controllers/admin/AdminRegisterController');
const adminChartController = require('../app/controllers/admin/AdminChartController');
const adminUserController = require('../app/controllers/admin/AdminUserController');
const adminInjectionController = require('../app/controllers/admin/AdminInjectionController');

router.get('/home', adminHomeController.home);


router.get('/register', adminRegisterController.registerList);
router.get('/register/injection/:id', adminRegisterController.registerInjection);
router.get('/register/seeadoctor/:id', adminRegisterController.registerSeeADoctor);




router.get('/chart', adminChartController.chart);
router.get('/user', adminUserController.userList);
router.get('/user/info/:id', adminUserController.userInfo);
router.delete('/user/delete/:id', adminUserController.userDelete);
router.get('/user/info/update/:id', adminUserController.userInfoUpdate);
router.get('/user/info/medical/:id', adminUserController.userInfoMedical);
router.get('/user/info/medical/update', adminUserController.userInfoMedicalUpdate);



router.get('/injection', adminInjectionController.injection);
router.get('/injection/add', adminInjectionController.injectionAdd);
router.post('/injection/store', adminInjectionController.injectionStore);
router.delete('/injection/:id', adminInjectionController.injectionDelete);
router.get('/injection/info/:id', adminInjectionController.injectionInfo);
router.get('/injection/edit/:id', adminInjectionController.injectionEdit);
router.put('/injection/update/:id', adminInjectionController.injectionUpdate);

module.exports = router;
