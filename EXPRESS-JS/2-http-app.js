const http = require("http");

const { readFileSync } = require("fs");

const websiteHome = readFileSync("./website/index.html");
const styleSheet = readFileSync("./website/style.css");
const scriptFile = readFileSync("./website/script.js");

const server = http.createServer((req,res) => {
    console.log("server got a hit!!");
    const url = req.url;

    if (url === "/") {
        res.writeHead(200,{ "content-type": "text/html" });
        res.write(websiteHome);
        res.end();
    }
    else if (url === "/info") {
        res.writeHead(200,{ "content-type": "text/html" });
        res.write("<h1>it is the Info page</h1>");
        res.end();
    }
    else if (url === "/style.css") {
        res.writeHead(200,{ "content-type": "text/css" });
        res.write(styleSheet);
        res.end();
    }
    else if (url === "/script.js") {
        res.writeHead(200,{ "content-type": "text/javascript" });
        res.write(scriptFile);
        res.end();
    }
    else {
        res.writeHead(404,{ "content-type": "text/html" });
        res.write("<h1>Opps Page Not Found</h1>");
        res.end();
    }
});
server.listen(5000,() => {
    console.log("listening to port 5000...");
});
