
const { openApp } = require('open'); 
const open = (...args) => import('open').then(m => m.default(...args)); //auto opens tab function

const http = require("http");
const fs = require("fs");

const server = http.createServer((req,res) => {
    if (req.url === "/" || req.url === "/index.html") {
        // Serve the HTML
        fs.readFile("index.html", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        });
    } else if (req.url === "/styles.css") {
        // Serve the CSS
        fs.readFile("styles.css", (err, data) => {
            res.writeHead(200, { "Content-Type": "text/css" });
            res.end(data);
        });
    } else {
        // Checks for errors in finding files
        res.writeHead(404);
        res.end("Not Found");
    }
});
server.listen(3001, () => {
    console.log("Server running on http://localhost:3001");
    open('http://localhost:3001'); // This triggers the browser to open
});
