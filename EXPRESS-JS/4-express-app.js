const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

app.get("/",(req,res) => {
    res.status(200).sendFile(path.resolve(__dirname,"./website/index.html"));
});

app.get("*",(req,res) => {
    res.status(404).send("<h1>404 Page Not Found</h1>");
});

app.listen(5000,() => {
    console.log("Server is live at port 5000");
});

