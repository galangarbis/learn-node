//Import Modul HTTP NodeJS
var http = require("http");
//Call Module FileStream From Nodejs
var fs = require('fs');
//Create Server
http.createServer(function (req, res) {
    //Change from text/plain to text/html
    res.writeHead(200, {"Content-Type" : "text/html"});
    //Call index.html
    fs.createReadStream('./template/index.html').pipe(res);
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");