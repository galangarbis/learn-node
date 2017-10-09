var http = require('http');
//import url module
var url = require('url');
//import routes module
var routes = require('routes')();
//add routes
routes.addRoute('/',function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Home");
});

routes.addRoute('/profile/:nama?/:kota?',function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Profile Page ===>>> "+this.params.nama+" dari "+this.params.kota);
});

routes.addRoute('/contact',function (req, res) {
    res.writeHead(200, {"Content-Type" : "text/plain"});
    res.end("Contact Page");
});

http.createServer(function(req, res){
   //call pathname
   var path = url.parse(req.url).pathname;
   var match = routes.match(path);
   if (match){
       match.fn(req, res);
   } else {
       res.writeHead(404, {"Content-Type" : "text/plain"});
       res.end("Page Not Found!");
   }
}).listen(3133);