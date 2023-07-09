const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminUserController {
    // GET /me/stored/couses

    userList(req, res) {
        res.render('admin/user-list',{isAdmin: true});
    }
    userInfo(req, res) {
        res.render('admin/user-info',{isAdmin: true});
    }
    userInfoUpdate(req, res) {
        res.render('admin/user-info-update',{isAdmin: true});
    }
    userInfoMedical(req, res) {
        res.render('admin/user-info-medical',{isAdmin: true});
    }
    userInfoMedicalUpdate(req, res) {
        res.render('admin/user-info-medical-update',{isAdmin: true});
    }
}
module.exports = new AdminUserController();
