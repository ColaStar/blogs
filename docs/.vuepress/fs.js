var fs = require('fs');
var join = require('path').join;
function getJsonFiles(jsonPath){
    let jsonFiles = [];
    function findJsonFile(path){
        let files = fs.readdirSync(path);
        files.forEach(function (item, index) {
            let fPath = join(path,item);
            let stat = fs.statSync(fPath);
            
            if(stat.isDirectory() === true) {
                findJsonFile(fPath);
            }
            var reg = /.\md$/g
            
            // var pathList = fPath.split('/');
            // var directory = pathList.slice(pathList.length-2)
            // var fileName = pathList[pathList.length-1]
            if (stat.isFile() === true&&reg.test(fPath) ) { 
            // console.log(directory,fPath)
              nPath = fPath.replace(jsonPath.substring(2), '');
              jsonFiles.push(nPath);
            }
        });
    }
    findJsonFile(jsonPath);
    return jsonFiles
}
 
// console.log(getJsonFiles("./docs/no.0"));

// console.log(new getJsonFiles('/n'))
module.exports = exports = getJsonFiles