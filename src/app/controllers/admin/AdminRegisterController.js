const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminRegisterController {
    // GET /me/stored/couses

    registerList(req, res) {
        res.render('admin/register-list',{isAdmin: true});
    }
    registerInjection(req, res) {
        res.render('admin/register-injection',{isAdmin: true});
    }
    registerSeeADoctor(req, res) {
        res.render('admin/register-doctor',{isAdmin: true});
    }




    babyProfile(req, res) {
        res.render('admin/profile-baby',{isAdmin: true});
    }
    addBabyProfile(req, res) {
        res.render('admin/profile-baby-add',{isAdmin: true});
    }
}
module.exports = new AdminRegisterController();
