
var fs = require('fs');
var join = require('path').join;
let path = require('path')
class generateDir {
    constructor(repPath, outputFile, path) {
      this.repPath = repPath
      this.outputFile = outputFile
      this.path = path
    }
}
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
            var pathList = fPath.split('/');
            var directory = pathList[pathList.length-2]
            if (stat.isFile() === true&&reg.test(fPath) ) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    console.log(jsonFiles);
}
 
getJsonFiles("./docs/");
