const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminChartController {
    // GET /me/stored/couses

    chart(req, res) {
        res.render('admin/chart',{isAdmin: true});
    }
}
module.exports = new AdminChartController();
