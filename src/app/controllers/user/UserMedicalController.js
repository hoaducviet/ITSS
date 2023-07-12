const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminMedicalController {
    // GET /me/stored/couses

    medical(req, res) {
        res.render('user/medical');
    }
    medicalInfo(req, res) {
        res.render('user/medical-info');
    }
    medicalInfoUpdate(req, res) {
        res.render('user/medical-info-update');
    }

}
module.exports = new AdminMedicalController();
