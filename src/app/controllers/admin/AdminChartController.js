const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminChartController {
    // GET /me/stored/couses

    chart(req, res) {
        res.render('admin/chart');
    }
}
module.exports = new AdminChartController();
