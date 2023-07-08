const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserHomeController {
    // GET /me/stored/couses

    home(req, res) {
        res.render('user/home');
    }
}
module.exports = new UserHomeController();
