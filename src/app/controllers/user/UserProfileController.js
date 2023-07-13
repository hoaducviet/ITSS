const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserProfileController {
    // GET /me/stored/couses

    profile(req, res) {
        res.render('user/profile',{
            isUser: true,
        });
    }
    profileUpdate(req, res) {
        res.render('user/profile-update',{
            isUser: true,
        });
    }
}
module.exports = new UserProfileController();
