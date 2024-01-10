const express = require("express");
const path = require("path");

const app = express();

app.use(express.static("./public"));

// app.get("/",(req,res) => {
//     res.status(200).sendFile(path.resolve(__dirname,"./website/index.html"));
// });

app.get("*",(req,res) => {
    res.status(404).send("<h2>404 Page Not Found</h2>");
});

app.listen(5001,() => {
    console.log("server is live at port 5000");
});