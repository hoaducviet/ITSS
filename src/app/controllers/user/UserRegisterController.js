const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class UserRegisterController {
    // GET /me/stored/couses

    register(req, res) {
        res.render('user/register');
    }

    registerInjection(req, res) {
        res.render('user/register-injection');
    }
    registerDoctor(req, res) {
        res.render('user/register-doctor');
    }
}
module.exports = new UserRegisterController();
