const express = require('express');
const {PostAva, PostBG,PostGrAva} = require('../../controllers/PostImage')
const PostImageRouter =express.Router();

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
PostImageRouter.post("/postava",upload.single("image"), PostAva)
PostImageRouter.post("/postbg",upload.single("image"), PostBG)
PostImageRouter.post("/postgrava",upload.single("image"), PostGrAva)

module.exports = PostImageRouter;

