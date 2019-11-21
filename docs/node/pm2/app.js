var http = require('http')

http.createServer(function(request,response){
    response.end('30000')
}).listen(8888,function(){
    console.log(8888,'8888服务启动')
})