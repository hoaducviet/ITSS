const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminUserController {
    // GET /me/stored/couses

    userList(req, res, next) {
        User.find({})
            .then((Users) => {
                res.render('admin/user-list', {
                    isAdmin: true,
                    Users: mutipleMongooseToObject(Users),
                });
            })
            .catch(next);
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
