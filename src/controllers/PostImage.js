const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)

const { successCode, errorCode, failCode } = require('../ulti/response');

const PostAva = async (req, res) => {
    const { filename } = req.file;
    const { id } = req.body;

    let getData = await model.user.findByPk(id);

    let object = { ...getData, avatar: `/public/image/${filename}` };
 
    await model.user.update(object,
        {
            where: {
                user_id: id
            }
        })
    successCode(res, filename)
}

const PostBG = async (req, res) => {
    const { filename } = req.file;
    const { id } = req.body;

    let getData = await model.user.findByPk(id);

    let object = { ...getData, background: `/public/image/${filename}` };
 
    await model.user.update(object,
        {
            where: {
                user_id: id
            }
        })
    successCode(res, filename)
}

const PostGrAva = async (req, res) => {
    const { filename } = req.file;
    const { id } = req.body;

    let getData = await model.group.findByPk(id);

    let object = { ...getData, gr_ava: `/public/image/${filename}` };
 
    await model.group.update(object,
        {
            where: {
                gr_id: id
            }
        })
    successCode(res, filename)
}


module.exports = {
    PostAva,
    PostBG,
    PostGrAva
}