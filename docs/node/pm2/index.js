//简单开启多进程

//master

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;

if(cluster.isMaster){
    console.log(numCPUs,cluster)
    for(let i = 0 ;i<numCPUs.length;i++){
        var worker = cluster.fork()
        console.log(worker)
    }
}else{
    require("./app.js")
}