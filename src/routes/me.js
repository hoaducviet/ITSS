const express = require('express');
const router = express.Router();
const meController = require('../app/controllers/MeController');

// newsController.index

router.get('/trash/courses', meController.trashCourses);
router.get('/stored/courses', meController.storedCourses);
router.get('/stored/demo', meController.demo);

module.exports = router;
