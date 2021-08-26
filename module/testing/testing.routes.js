const {Router} = require("express")
const { getTesting } = require("./testing.controller")
const routes = new Router()


routes.get("/", getTesting)


module.exports = routes