const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserHomeController {
    // GET /me/stored/couses

    home(req, res) {
        res.render('user/home',{
            isUser: true,
        });
    }
    homeChart(req, res) {
        res.render('user/home-chart',{
            isUser: true,
        });
    }
}
module.exports = new UserHomeController();
