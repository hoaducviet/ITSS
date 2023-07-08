const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class MeController {
    // GET /me/stored/couses
    storedCourses(req, res, next) {
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted(),
        ])
            .then(([courses, deletedCount]) => {
                res.render('me/stored-courses', {
                    deletedCount: deletedCount,
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    // GET /me/trash/couses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) => {
                res.render('me/trash-courses', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }
    demo(req, res) {
        res.render('user/home');
    }
}
module.exports = new MeController();
