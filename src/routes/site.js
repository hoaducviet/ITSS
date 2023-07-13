const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// router.get('/search', siteController.search);
// router.get('/', siteController.index);
router.get('/', siteController.signIn);
router.get('/signup', siteController.signUp);
router.get('/forgot', siteController.forgot);


module.exports = router;
