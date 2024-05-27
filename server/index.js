const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv'); // Import dotenv

dotenv.config(); // Load environment variables from .env file

const RegisterModel = require('./models/Register');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }); // Use MONGODB_URI from environment variable

app.post('/register', (req, res) => {
    const { name, email, password } = req.body;
    RegisterModel.findOne({ email: email })
        .then(user => {
            if (user) {
                res.json("Already have an account");
            } else {
                RegisterModel.create({ name: name, email: email, password: password })
                    .then(result => res.json("Account created"))
                    .catch(err => res.json(err));
            }
        })
        .catch(err => res.json(err));
});
app.get('/',(req,res)=>{
    res.send(" world");
  })
const PORT= process.env.PORT || 3001; // Use PORT from environment variable or default to 3001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
