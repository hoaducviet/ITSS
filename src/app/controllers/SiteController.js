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

    signIn(req, res) {
        res.render('sign-in');
    }
    signUp(req, res) {
        res.render('sign-up');
    }
    forgot(req, res) {
        res.render('forgot');
    }
   
}
module.exports = new SiteController();
