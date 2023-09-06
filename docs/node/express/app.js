var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var qstring = require('querystring')

http.createServer(function(req,res){
    var qobj = qstring.parse(url.parse(req.url).query)
    var pathname = url.parse(req.url).pathname;
    if (pathname == '/') {
        res.end('hello');
    }else if(pathname == '/index/a'){
        console.log('post',req)
        res.end('dasd');
    }else{
        fs.readFile('index.html', function (err, data) {
            if (err) {
                return console.error(err);
            }
            res.write(data.toString())
            res.end('222')
            // console.log("异步读取: " + data.toString());
         });
        // fs.readFile(path.resolve(__dirname,'./index.html'));
    }  
    // req.on("data",function(data){
    //     console.log(data)
    // })
    // res.writeHead(200, {'Content-Type': 'text/html'});
    // res.write('Hello Http Server');
    // res.end();
}).listen(9527,function(){
    console.log('9727端口启动成功')
})