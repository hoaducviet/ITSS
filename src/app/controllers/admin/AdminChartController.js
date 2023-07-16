const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminChartController {
    
    // GET /Admin/Chart
    chart(req, res, next) {
        Promise.all([
            Parent.countDocuments({}),
            Children.countDocuments({}),
            Register.countDocuments({option: "Tiêm Chủng", status: "Hoàn Thành"}),
            Register.countDocuments({option: "Khám Bệnh", status: "Hoàn Thành"}),
        ])
            .then(([countParent, countChildren, countInjection, countSeeADoctor])=>{
                res.render('admin/chart',{
                    isAdmin: true,
                    countParent: countParent,
                    countChildren: countChildren,
                    countInjection: countInjection,
                    countSeeADoctor: countSeeADoctor,
                })
            })
            .catch(next)
    }
}
module.exports = new AdminChartController();
