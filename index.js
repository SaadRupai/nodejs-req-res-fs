
// http and fs module import
var http = require('http');
var fs = require('fs');


// server connection
var server = http.createServer((req, res) => {

    if (req.url === "/" || req.url === "/home") {
        res.writeHead(200, { 'COntent-Type': 'text/html' });
        let home = fs.readFileSync('home.html');            // file read
        res.write(home);
        res.end();
    } else if (req.url === "/about") {
        res.writeHead(200, { 'COntent-Type': 'text/html' });
        let about = fs.readFileSync('about.html');          //file read
        res.write(about);
        res.end();
    } else if (req.url === "/contact") {
        res.writeHead(200, { 'COntent-Type': 'text/html' });
        let contact = fs.readFileSync('contact.html');      //file read
        res.write(contact);
        res.end();
    } else if (req.url === "/career") {
        res.writeHead(200, { 'COntent-Type': 'text/html' });
        let career = fs.readFileSync('career.html');        //file read
        res.write(career);
        res.end();
    }


})


// server port
server.listen(5050);

// connection success message
console.log("Server Connected Successfully!");