const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const salt = bcrypt.genSaltSync(10);
const secret = 'asjdi1h2io4hsdalklp1kçaslfjxma'

dotenv.config({ path: '../../.env' });

app.use(cors({credentials:true, origin:'http://localhost:5173'}));


// Credenciais 
const dbUser = process.env.DB_USER
const dbPassword = process.env.DB_PASS

//that populates process.env

mongoose.connect(`mongodb+srv://${dbUser}:${dbPassword}@pplllproject.qxxn5pm.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    app.listen(4000)
    console.log("Conectou ao banco!")
}).catch((err) => console.log(err))


app.use(express.json());

app.post('/registro', async (req,res) => {
    const {username, email ,password} = req.body;
    try{
      const userDoc = await User.create({
        username,
        email,
        password:bcrypt.hashSync(password,salt),
      });
      res.json(userDoc);
    } catch(e) {
      console.log(e);
      res.status(400).json(e);
    }
  });
  


app.post('/login', async (req,res) => {
    const {email,password} = req.body;
    const userDoc = await User.findOne({email});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
      // logged in
      jwt.sign({email,id:userDoc._id}, secret, {}, (err,token) => {
        if (err) throw err;
        res.cookie('token', token).json({
          id:userDoc._id,
          email,
        });
      });
    } else {
      res.status(400).json('wrong credentials');
    }
  });
  