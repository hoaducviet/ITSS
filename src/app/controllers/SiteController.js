const Course = require('../models/Course');
const { mutipleMongooseToObject } = require('../../util/mongoose');
class SiteController {
    //GET /news
    index(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // GET /news/:slug
    search(req, res) {
        res.render('search');
    }

    login(req, res) {
        res.render('login');
    }
}
module.exports = new SiteController();
