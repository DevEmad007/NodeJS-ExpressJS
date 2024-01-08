const http = require("http");

const server = http.createServer((req,res) => {
    const url = req.url;
    if (url === "/") {
        res.end("Welcome to our home page");
    }
    else if (url === "/about") {
        res.end("hey! It's the About Page innit?");
    } else {
        res.write(`
         <h1>OPPS</h1>
         <p>404 Page Not Found</p>
         `);
        res.end();
    }
});

server.listen(5000,() => {
    console.log("server started");
});