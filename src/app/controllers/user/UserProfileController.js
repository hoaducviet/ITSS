const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserProfileController {
    // GET /me/stored/couses

    profileNoUpdate(req, res) {
        res.render('user/profile-no-update');
    }
    profile(req, res) {
        res.render('user/profile');
    }
}
module.exports = new UserProfileController();
