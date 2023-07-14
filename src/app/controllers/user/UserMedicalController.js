const User = require('../../models/User');
const Injection = require('../../models/Injection');
const Parent = require('../../models/Parent');
const Children = require('../../models/Children');
const Register = require('../../models/Register');
const MedicalRecord = require('../../models/MedicalRecord');
const { mutipleMongooseToObject } = require('../../../util/mongoose');
class AdminMedicalController {
    // GET /me/stored/couses

    medical(req, res, next) {
        const parent = req.session.parent
        const childrens = req.session.children
        res.render('user/medical',{
            isUser: true,
            parent: parent,
            childrens: childrens,
        });
    }
    medicalInfo(req, res) {
        const parent = req.session.parent
        res.render('user/medical-info',{
            isUser: true,
            parent: parent,
        });
    }
    medicalInfoChildren(req, res) {
        res.render('user/medical-info',{
            isUser: true,
        });
    }
    medicalInfoUpdate(req, res) {
        res.render('user/medical-info-update',{
            isUser: true,
        });
    }

}
module.exports = new AdminMedicalController();
