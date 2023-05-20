const express = require('express')
const cors = require('cors')
const app = express();

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

app.use(express.static("."))
app.listen(8080);

const rootRouter = require('./routers/index')
app.use("/api",rootRouter)



