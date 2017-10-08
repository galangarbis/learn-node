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
        } else if(access.pathname == "/form") {
            //Cek Action Method From Form
            if (req.method.toUpperCase() == "POST"){
                //for method POST
                var dataPost = "";
                req.on('data', function (chunck) {
                   dataPost += chunck;
                });

                req.on('end',function () {
                    dataPost = gString.parse(dataPost);
                    res.writeHead(200,{"Content-Type" : "text/plain"});
                    res.end(JSON.stringify(dataPost));
                });
            } else { //for method GET
                //Render Form
                res.writeHead(200,{"Content-Type" : "text/html"});
                fs.createReadStream("./template/form.html").pipe(res);
            }
        } else {
            res.writeHead(404,{"Content-Type" : "text/plain"});
            res.end("Page Not Found");
        }
    }
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");