const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db')

const app = express();

// Connect DataBase
connectDB();

const {PORT} = process.env;

app.get('/test', (req, res)=>{
    res.send('Great ****')
})

app.listen(PORT, ()=> console.log(`Server started on port ${PORT} !!!`)  )