const Course = require('../../models/Course');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminChartController {
    // GET /me/stored/couses

    chart(req, res) {
        res.render('admin/chart',{isAdmin: true});
    }
}
module.exports = new AdminChartController();
