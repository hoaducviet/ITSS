const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminInjectionController {
    // GET /me/stored/couses

    injection(req, res) {
        res.render('admin/injection',{isAdmin: true});
    }

    injectionAdd(req, res) {
        res.render('admin/injection-add',{isAdmin: true});
    }
    injectionInfo(req, res) {
        res.render('admin/injection-info',{isAdmin: true});
    }
    injectionUpdate(req, res) {
        res.render('admin/injection-update',{isAdmin: true});
    }

}
module.exports = new AdminInjectionController();
