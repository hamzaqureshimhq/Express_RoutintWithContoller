var my_exp = require("express");
let routing = require("./Router/rasta")
var myapp = my_exp();

myapp.use("/",routing)

// myapp.get("/",function(req,res){
//     res.send("Server Started");
// })

myapp.listen(2001);