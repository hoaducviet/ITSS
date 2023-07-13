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
                    isUser: true,
                    Registers: mutipleMongooseToObject(Registers),
                });
            })
            .catch(next);
    }

    registerInjection(req, res) {
        res.render('user/register-injection',{
            isUser: true,
        });
    }
    registerDoctor(req, res) {
        res.render('user/register-doctor',{
            isUser: true,
        });
    }
}
module.exports = new UserRegisterController();
