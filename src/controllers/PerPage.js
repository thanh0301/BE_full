const { where } = require('sequelize');
const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const _ = require("lodash")
const { successCode, errorCode, failCode } = require('../ulti/response');

const PerPage = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model.user.findByPk(id, {
            include: ["statuses"]
        })

        if (data) {
            successCode(res, data, '');
           
        }
        else {
            errorCode(res, "Người dùng không tồn tại!!!")
        }
    }
    catch {
        failCode(res);
    }
}
const PerPageGroup = async (req, res) => {
    try {
        const { id } = req.params;
        const data = await model.group.findByPk(id, {
            include: ["statuses"]
        })

        if (data) {
            successCode(res, data, '');
           
        }
        else {
            errorCode(res, "Người dùng không tồn tại!!!")
        }
    }
    catch {
        failCode(res);
    }
}




module.exports = {
    PerPage,
    PerPageGroup,
    
}
