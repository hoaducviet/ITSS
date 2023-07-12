const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminHomeController {
    // GET /me/stored/couses

    home(req, res) {
        res.render('admin/home',{isAdmin: true});
    }
}
module.exports = new AdminHomeController();
