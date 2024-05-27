const { default: mongoose } = require('mongoose')
const moongose = require ('mongoose')

const RegisterSchema = new mongoose.Schema({
    name: String,
    email:String,
    password:String,

})
const RegisterModel = moongose.model("register",RegisterSchema );

module.exports = RegisterModel ;