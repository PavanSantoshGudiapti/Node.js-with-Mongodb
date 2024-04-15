const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();
var cors = require('cors');

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}))

const loginRote = require('./routes/loginRouter');
app.use('/login', loginRote);
app.use(cors());


mongoose.connect(process.env.URL, { useNewUrlParser: true, useUnifiedTopology: true });

// Get the default connection
const db = mongoose.connection;

// Event listeners for connection
db.on('connected', () => {
   app.listen(process.env.PORT, () =>{
   console.log("server runing on " + " " + `${process.env.PORT}`)
   })
});

db.on('error', (err) => {
    console.error('Connection error:', err);
});



