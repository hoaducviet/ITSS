const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminListRegisterController {
    // GET /me/stored/couses

    listRegister(req, res) {
        res.render('admin/list-register',{isAdmin: true});
    }
    momProfile(req, res) {
        res.render('admin/profile-mom',{isAdmin: true});
    }

    babyProfile(req, res) {
        res.render('admin/profile-baby',{isAdmin: true});
    }
    addBabyProfile(req, res) {
        res.render('admin/profile-baby-add',{isAdmin: true});
    }
}
module.exports = new AdminListRegisterController();
