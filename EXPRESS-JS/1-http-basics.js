const http = require("http");
const { readFile } = require("fs");
// const website = require("./website/index.html");

const server = http.createServer((req,res) => {
    console.log("server got a hit!!");
    const url = req.url;

    if (url === "/") {
        res.writeHead(200,{ "content-type": "text/html" });
        res.write("<h1>it is the home page</h1>");
        res.end();
    }
    else if (url === "/info") {
        res.writeHead(200,{ "content-type": "text/html" });
        res.write("<h1>it is the Info page</h1>");
        res.end();
    } else {
        res.writeHead(404,{ "content-type": "text/html" });
        res.write("<h1>Opps Page Not Found</h1>");
        res.end();
    }
});
server.listen(5000,() => {
    console.log("listening to port 5000...");
});