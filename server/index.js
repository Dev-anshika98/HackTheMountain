const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const RegisterModel = require('./models/Register')

const app = express()
app.use(cors())
app.use(express.json())


mongoose.connect('mongodb://127.0.0.1:27017/htm');



app.post('/register', (req, res)=>{
    const {name, email, team,  password} =req.body;
    RegisterModel.findOne({email:email})
    .then(user=>{
       if(user){
        res.json("Already have an account")
       }
       else{
        RegisterModel.create({name:name, email:email, team:team , password:password})
        .then(result=>res.json("Account created"))
        .catch(err=> res.json(err))

       }
    }).catch(err =>res.json(err))




})
app.listen(3001, ()=>{
    console.log("Server is running")
})