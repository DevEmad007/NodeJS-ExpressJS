const http = require("http");

const server = http.createServer((req,res) => {
    if (req.url === "/") {
        res.end("Welcome to our home page");
    }
    if (req.url === "/about") {
        res.end("hey! It's the About Page innit?");
    }
    res.write(`
    <h1>OPPS</h1>
    <p>404 Page Not Found</p>
    `);
    res.end();
});

server.listen(6969);