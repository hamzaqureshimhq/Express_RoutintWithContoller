let mongoos = require("mongoose")

let person_schema = new mongoos.Schema({
    Namae:{
        type:String,
        required:true,
    },

    Email:{
        type:String,
        required:true,
    },

    Password:{
        type:String,
        required:true,
    },

    Age:{
        type:String,
        required:true,
    },

    Gender:{
        type:String,
        required:true,
    },
})

let person = mongoos.model("Persons", person_schema)
module.exports = person 
   