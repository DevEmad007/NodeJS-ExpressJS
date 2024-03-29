const express = require('express');
const app = express();

app.get("/",(req,res) => {
    res.status(200).send("Home Page");
});

app.get("/about",(req,res) => {
    res.status(200).send("It's the about page");
});

app.get("*",(req,res) => {
    res.status(404).send("Page not found");
});

app.listen(5000,() => {
    console.log('server is listening on port 5000...');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen