function route(pathname,response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    if (pathname == '/') {
        response.end('hello');
    }else if(pathname == '/index/a'){
        response.end('dasd');
    }else{
        response.end('404');
    }
}

exports.route = route;