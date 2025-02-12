require("dotenv").config()
var my_exp = require("express");
let routing = require("./Router/rasta")
var myapp = my_exp();
let connection = require("./DbConnection")
let p = require("./Model/person_model")

myapp.use("/",routing)

let addDatainPerson = async function() {
    try {
        await p.create({
            Name: "Demo",
            Email: "demo@gmail.com",
            Password: "123",
            Age: "23",
            Gender: "male",
        })
        console.log("Record Added")
    } catch (error) {
        console.log(error)
    }
    
}

// myapp.get("/",function(req,res){
//     res.send("Server Started");
// })
connection().then(()=>{
    myapp.listen(2001);
    addDatainPerson()
}).catch((error)=>{
    console.log(error)
})
