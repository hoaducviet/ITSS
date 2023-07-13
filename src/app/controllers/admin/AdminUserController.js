const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
const { mongooseToObject } = require('../../../util/mongoose');

class AdminUserController {
    // GET /me/stored/couses

    userList(req, res, next) {
        Parent.find({})
            .then((parents) => {
                res.render('admin/user-list', {
                    isAdmin: true,
                    parents: mutipleMongooseToObject(parents),
                });
            })
            .catch(next);
    }

    userDelete(req, res, next) {
        Parent.delete({ _id: req.params.id })
            .then(() => res.redirect('/admin/user'))
            .catch(next);
    }


    userInfo(req, res, next) {
        Parent.findById(req.params.id)
        .then((parent) =>
            res.render('admin/user-info', {
                isAdmin: true,
                parent: mongooseToObject(parent),
            }),
        )
        .catch(next);
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
