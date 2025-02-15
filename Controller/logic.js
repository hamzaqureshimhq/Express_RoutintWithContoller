 let person = require("../Model/person_model")
 let Dashboard = async function(req,res){
    try {
        res.send("Dashboard")
    } catch (error) {
        console.log(`${error}`)
    }
 }

 let Home = async function(req,res){
    try {
        res.send("Home")
    } catch (error) {
        console.log(`${error}`)
    }
 }

 let About = async function(req,res){
    try {
        res.send("About")
    } catch (error) {
        console.log(`${error}`)
    }
 }

  let datajao = async function(req,res)
  {
    try{
        console.log(req.body)
        let {Name,Email,Password , Age,Gender} = req.body;
        let email_cyheck = person.findOne({})
        if(email_cyheck){
            return res.json({gms: "This Email is Already Registered"})
        }
        let perso_insert = person.create({Name,Email,Password,Age,Gender});
        res.json({gms:perso_insert})
    } catch (error) {
        console.log(`${error}`)
    }
  }


 module.exports = {Dashboard,Home,About,datajao}