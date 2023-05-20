const express = require('express')
const rootRouter = express.Router()

const LoginSignUpRouter = require('./v1/LoginSignUpRouter')
const PostImageRouter = require('./v1/PostImageRouter')
const PerPageRouter = require('./v1/PerPageRouter')
const StatusRouter = require('./v1/StatusRouter')
const GroupRouter = require('./v1/GroupRouter')


rootRouter.use("/login/v1",LoginSignUpRouter)
rootRouter.use("/postimage/v1",PostImageRouter)
rootRouter.use("/perpage/v1",PerPageRouter)
rootRouter.use("/status/v1",StatusRouter)
rootRouter.use("/group/v1",GroupRouter)

module.exports = rootRouter;