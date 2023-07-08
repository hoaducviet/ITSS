const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminInjectionController {
    // GET /me/stored/couses

    injection(req, res) {
        res.render('admin/injection');
    }

    injectionAdd(req, res) {
        res.render('admin/injection-add');
    }
}
module.exports = new AdminInjectionController();
