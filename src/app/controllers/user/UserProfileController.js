const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserProfileController {
    // GET /me/stored/couses

    profile(req, res) {
        res.render('user/profile');
    }
    profileUpdate(req, res) {
        res.render('user/profile-update');
    }
}
module.exports = new UserProfileController();
