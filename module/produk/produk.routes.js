const { Router } = require("express")
const routes = new Router()
const { AddProduk } = require("./produk.controller")


routes.post("/add", AddProduk)


exports.RoutesProduk = routes