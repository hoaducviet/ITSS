const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminListRegisterController {
    // GET /me/stored/couses

    listRegister(req, res) {
        res.render('admin/list-register');
    }
    momProfile(req, res) {
        res.render('admin/profile-mom');
    }

    babyProfile(req, res) {
        res.render('admin/profile-baby');
    }
    addBabyProfile(req, res) {
        res.render('admin/profile-baby-add');
    }
}
module.exports = new AdminListRegisterController();
