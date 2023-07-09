const Course = require('../../models/Course');
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
