const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const bcrypt = require('bcrypt')

const { successCode, errorCode, failCode } = require('../ulti/response');

const userHastag = async(req, res) => {
    try {
        
    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

const sttHastag = async(req, res) => {
    try {

    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

module.exports = {
    userHastag,
    sttHastag
}