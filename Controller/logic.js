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

 module.exports = {Dashboard,Home,About}