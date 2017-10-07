//Import Modul HTTP NodeJS
var http = require("http");
//Call Module FileStream From Nodejs
var fs = require('fs');
//Create Server
http.createServer(function (req, res) {
    //setting code for response
    var resCode = 0;
    var file = "";
    //logic url
    if (req.url == "/"){
        //index page
        resCode = 200;
        file = "index.html";
    } else if(req.url == "/contact"){
        //contact page
        resCode = 200;
        file = "contact.html";
    } else {
        //404 Not Found page
        resCode = 404;
        file = "404.html";
    }
    //Change from text/plain to text/html
    res.writeHead(resCode, {"Content-Type" : "text/html"});
    //Call index.html
    fs.createReadStream('./template/'+file).pipe(res);
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");