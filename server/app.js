var http = require('http');
var helloMessage = require('./hello');
var goodbyeStuff = require('./goodbye');

http.createServer(function(request, response){
    response.writeHead(200);
    response.write(helloMessage());
    response.write(goodbyeStuff.wait());
    response.write(goodbyeStuff.kittyFooFoo());
    response.end();
}).listen(3000);

console.log("Listening on port 3000!");