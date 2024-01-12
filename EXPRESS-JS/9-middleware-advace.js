const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

//  req => middleware => res

// app.use([logger, authorize])
app.get('/',(req,res) => {
    res.status(200).send('Home ');
});

app.get('/api/products',(req,res) => {
    res.status(200).send('Api Url');
});

app.listen(5000,() => {
    console.log("server is listening to port 5000....");
});