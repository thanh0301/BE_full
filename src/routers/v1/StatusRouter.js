const express = require('express');
const {StatusPost, StatusDelete,StatusUpdate,StatusShow,StatusShowId  ,StatusCmt ,StatusCmtid ,cmdId,changePassword} = require('../../controllers/Status')
const StatusRouter =express.Router();



const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.cwd() + "/public/image");
    },
    filename: (req, file, cb) => {
        //nên đặt tên file upload theo ngày tháng năm giờ phút giây để tên file không bị trùng lặp
        const fileNewName = Date.now() + "_" + file.originalname;
        cb(null, fileNewName);
    }
})

const upload = multer({ storage });

StatusRouter.post("/statuspost", StatusPost)
StatusRouter.delete("/statusdelete", StatusDelete)
StatusRouter.put("/statusupdate",upload.single(""),StatusUpdate)
StatusRouter.get("/statusshow",StatusShow)
StatusRouter.get("/statusshowid/:id",StatusShowId)
StatusRouter.get("/cmdId/:id",cmdId)
StatusRouter.post("/StatusCmt",upload.single(""), StatusCmt)
StatusRouter.get("/StatusCmtid/:id",StatusCmtid)

module.exports = StatusRouter;