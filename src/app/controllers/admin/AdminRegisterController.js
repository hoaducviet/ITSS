const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminRegisterController {
    // GET /me/stored/couses

    registerList(req, res, next) {
        Register.find({})
        .then((Registers) => {
            res.render('admin/register', {
                isAdmin: true,
                Registers: mutipleMongooseToObject(Registers),
            });
        })
        .catch(next);
    }
    registerInjection(req, res) {
        res.render('admin/register-injection',{isAdmin: true});
    }
    registerSeeADoctor(req, res) {
        res.render('admin/register-doctor',{isAdmin: true});
    }




    babyProfile(req, res) {
        res.render('admin/profile-baby',{isAdmin: true});
    }
    addBabyProfile(req, res) {
        res.render('admin/profile-baby-add',{isAdmin: true});
    }
}
module.exports = new AdminRegisterController();
