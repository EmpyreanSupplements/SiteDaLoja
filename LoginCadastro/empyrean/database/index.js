const express = require('express');
const app = express();
const cors = require('cors');
const User = require('./models/User')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({ path: '../../.env' });

app.use(cors());


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

app.post('/registro', async (req, res) => {
    const {username , email, password} = req.body;
    const userDoc = await User.create({
        username,
        email,
        password
    })
    res.json(userDoc);
});
