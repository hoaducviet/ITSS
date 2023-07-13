const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// router.get('/search', siteController.search);
// router.get('/', siteController.index);
router.get('/', siteController.signIn);
router.post('/validate/signin', siteController.validateSignIn);
router.get('/signup', siteController.signUp);
router.post('/signup/create', siteController.createSignUp);
router.get('/forgot', siteController.forgot);
router.get('/update/profile', siteController.updateProfile);
router.get('/update/profile/first', siteController.firstUpdateProfile);
router.post('/update/profile/first/stored', siteController.storeFirstUpdateProfile);
router.get('/destroy/session', siteController.destroySession);


module.exports = router;
