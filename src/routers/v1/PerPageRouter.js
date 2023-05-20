const express = require('express');
const {PerPage,PerPageGroup} = require('../../controllers/PerPage')
const PerPageRouter =express.Router();

PerPageRouter.get("/perpage/:id", PerPage)
PerPageRouter.get("/PerPageGroup/:id", PerPageGroup)

module.exports = PerPageRouter;