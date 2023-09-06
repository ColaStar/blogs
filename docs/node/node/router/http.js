var http = require("http");
var url = require("url");
 
function start(route) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Request for " + pathname + " received.");
    route(pathname,response);
  }
 
  http.createServer(onRequest).listen(9999);
  console.log("Server has started.");
}
 
exports.start = start;