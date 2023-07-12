const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserRegisterController {
    // GET /me/stored/couses

    register(req, res, next) {
        Register.find({})
            .then((Registers) => {
                res.render('user/register', {
                    Registers: mutipleMongooseToObject(Registers),
                });
            })
            .catch(next);
    }

    registerInjection(req, res) {
        res.render('user/register-injection');
    }
    registerDoctor(req, res) {
        res.render('user/register-doctor');
    }
}
module.exports = new UserRegisterController();
