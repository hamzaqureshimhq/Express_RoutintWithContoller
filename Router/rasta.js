var my_exp = require("express");
let route = my_exp.Router();
let logicfunction = require("../Controller/logic")

route.get("/",logicfunction.Dashboard)
route.get("/h",logicfunction.Home)
route.get("/a",logicfunction.About)

module.exports = route;