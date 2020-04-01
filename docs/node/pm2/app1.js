var http = require('http')

http.createServer(function(request,response){
    response.end('30000')
}).listen(8888,function(){
    console.log(8889,'8889服务启动')
})

