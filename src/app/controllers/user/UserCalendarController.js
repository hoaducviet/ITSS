const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminListRegisterController {
    // GET /me/stored/couses

    calendar(req, res) {
        res.render('user/calendar');
    }

    registerInjection(req, res) {
        res.render('user/register-injection');
    }
    registerDoctor(req, res) {
        res.render('user/register-doctor');
    }
}
module.exports = new AdminListRegisterController();
