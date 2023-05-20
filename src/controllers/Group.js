
const sequelize = require('../model/index')
const initModel = require('../model/init-models')
const model = initModel(sequelize)
const _ = require("lodash")
const { successCode, errorCode, failCode } = require('../ulti/response');

const GroupCreate = async (req, res) => {
    try{      
        const {gr_name, user_id,gr_content} = req.body;
        let object = {
            gr_ava: '/public/image/avatar-mac-dinh-1.png',
            gr_name,
            user_id,
         
            gr_content,
        }
        const data = await model.group.create(object);
        successCode(res, data,"Tạo group thành công!")
    }
    
    catch(err)
    {
            failCode(res,'',"Lỗi")
    }
}


const userHastag = async(req, res) => {
    try {
        const {hastag_id, user_id} = req.body;

        let object = {
            hastag_id,
            user_id
        }
        const data = await model.user_hastag.create(object);
        successCode(res, data,"Chọn hastag thành công!!!")
    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

const grHastag = async(req, res) => {
    try {
        const {hastag_id, gr_id} = req.body;
        let object = {
            hastag_id,
            gr_id
        }
        const data = await model.group_hastag.create(object);
        successCode(res, data, 'Chọn hastag thành công!!!')
    }
    catch {
        failCode(res,'','Có lỗi!!!')
    }
}

Array.prototype.unique = function() {
    var a = this.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
};

const Statusgroup = async(req, res) => {
    let data = await model.group.findAll();
    successCode(res,_.orderBy(data))
}

const PostGrStt = async (req, res) => {
    try {
        const {gr_id} = req.body;
        const {content, type_id, user_id} = req.body;
        var d = new Date()
        let object = {
            content,
            type_id,
            update_time: d.toISOString(),
            user_id,
            gr_id
        }
        const data = await model.status.create(object);
        successCode(res, data,"Đăng bài thành công!")
    }
    catch(err) {
        failCode(res,'','Lỗi!!!')
    }
}



// const ShowGrStt = async (req, res) => {
//     try {
//         const {id} = req.params;
//         let data = await model.status.findAll({include: ['type','user','likes','comments']},{
//             where: {
//                 gr_id : id
//             }
//         });
//         successCode(res,_.orderBy(data,['update_time'],['desc']))
//     }
//     catch(err) {
//         failCode(res,'','Lỗi!!!')
//     }
// }

const ShowGrStt = async(req,res) => {
    const { id } = req.params;
    let data = await model.status.findAll({
        include: ["user"],
        where: {
            gr_id: id
        }
    });
    successCode(res,_.orderBy(data))
}


const StatusRp = async (req, res) => {
    const { user_id, status_id, reason } = req.body;
    let object = {
      user_id,
      status_id,
      reason,
    };
    const data = await model.report.create(object);
    let noti = {
      user_id,
      noti_tittle: "Bài viết của bạn bị báo cáo",
      noti_content: `Bài viết ${status_id} của bạn đã bị báo cáo vì lí do ${reason}. Vui lòng kiểm tra lại nội dung bài viết!`,
    };
    const n = await model.notification.create(noti);
    successCode(res, n, "Báo cáo thành công!");
  };


  
module.exports = {
    GroupCreate,
    userHastag,
    grHastag,
    Statusgroup,
    PostGrStt,
    ShowGrStt,
    StatusRp
}