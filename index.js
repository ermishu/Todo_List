const express = require('express');
const port = 3000;

// import the database mongoose from config 
const db = require('./config/mongoose');

const app = express();

app.use(express.urlencoded())

app.set('view engine','ejs');
app.set('views','./views')

app.use(express.static('assets'))

app.use('/',require('./routes'))

app.listen(port, (err) => {
    if(err){
        console.log(`Error connecting to the port : ${port}`);
        return;
    }
    console.log(`Successfully connecting to the port: ${port}`);
})