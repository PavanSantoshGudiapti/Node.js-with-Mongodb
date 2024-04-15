const express = require('express');
const app = express();
require('dotenv').config();
var cors = require('cors');

const bodyparser = require('body-parser');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors());

const Dbconnection = require('./app/models/db');

const loginRote = require('./app/routes/loginRouter');
app.use('/login', loginRote);

Dbconnection.then(() => {
    app.listen(process.env.PORT, () => {
        console.log("server runing on " + " " + `${process.env.PORT}`)
    })
})



