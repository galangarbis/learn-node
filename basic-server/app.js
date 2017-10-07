//Import Modul HTTP NodeJS
var http = require("http");
//Create Server
http.createServer(function (req, res) {
   if(req.url != "/favicon.ico"){
       console.log(req.url);
       res.writeHead(200, {"Content-Type" : "text/plain"});
       res.write("Hello from Node Js Server");
       res.write("You req "+req.url);
       res.end();
   }
}).listen(3133); //<<=== Port listen 0n 3133

console.log("Server is Running on 3133");