//Import Modul HTTP NodeJS
var http = require("http");
//Import Modul URL
var url = require('url');
//Import module FileStream
var fs = require('fs');
//Import Module Query String
var gString = require('querystring');
//Create Server
http.createServer(function (req, res) {
    if(req.url != "/favicon.ico"){
        //parse module url
        var access = url.parse(req.url);
        if(access.pathname == "/"){
            //parse string to query string
            var data = gString.parse(access.query);
            res.writeHead(200,{"Content-Type" : "text/plain"});
            res.end(JSON.stringify(data));
        }
    }
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");