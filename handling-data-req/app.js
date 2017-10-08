//Import Modul HTTP NodeJS
var http = require("http");
//Import Modul URL
var url = require('url');
//Import module FileStream
var fs = require('fs');
//Create Server
http.createServer(function (req, res) {
    if(req.url != "/favicon.ico"){
        //parse module url
        var access = url.parse(req.url);
        var file = "";
        if(access.pathname == "/"){
            file = "./template/index.html";
        } else if(access.pathname == "/contact"){
            file = "./template/contact.html";
        } else {
            file = "./template/404.html";
        }
        res.writeHead(200, {"Content-Type" : "text/html"});
        fs.createReadStream(file).pipe(res);
    }
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");