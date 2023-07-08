const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminHomeController {
    // GET /me/stored/couses

    home(req, res) {
        res.render('admin/home');
    }
}
module.exports = new AdminHomeController();
