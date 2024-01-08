const http = require("http");

const server = http.createServer();

server.on("request",(req,res) => {
    res.end("sdjkhgjksdfbvgsfb");
});
const port = 6969;

server.listen(port,() => {
    console.log(`server started at ${port}`);
});