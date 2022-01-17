var server = require("./http");
var router = require("./router");
 
server.start(router.route);