const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminListUserController {
    // GET /me/stored/couses

    listUser(req, res) {
        res.render('admin/list-user');
    }
}
module.exports = new AdminListUserController();