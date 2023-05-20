const express = require('express');
const {signUp, Login,Logout,changePassword} = require('../../controllers/LoginSignUp')
const LoginSignUpRouter =express.Router();

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


LoginSignUpRouter.post("/signup",upload.single(), signUp)
LoginSignUpRouter.post("/login", Login)
LoginSignUpRouter.post("/logout",Logout)
LoginSignUpRouter.put("/changePassword",upload.single(), changePassword)
module.exports = LoginSignUpRouter;