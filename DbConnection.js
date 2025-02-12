let mongoos = require("mongoose")

let db_url = process.env.ATLAS_URL
if (!db_url) {
    console.log("url not find")
}
else{
    console.log(`Atlas url ${db_url}`)
}

let connection = async function() {
    try {
        await mongoos.connect(db_url)
        console.log("Connetion Established")
    } catch (error) {
        console.log(error)
    }
    
}

module.exports = connection