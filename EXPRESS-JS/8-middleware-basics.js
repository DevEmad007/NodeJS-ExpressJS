const express = require('express');

const app = express();

const logger = (req,res,next) => {
    const time = new Date().getFullYear();
    const url = req.url;
    const method = req.method;
    console.log({ time,url,method });
    next();
};

app.get('/',logger,(req,res) => {
    res.status(200).send('Home ');
});

app.get('/api/products',logger,(req,res) => {
    res.status(200).send('Api Url');
});

app.listen(5000,() => {
    console.log("server is listening to port 5000....");
});