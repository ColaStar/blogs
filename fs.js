
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
            if (stat.isFile() === true&&reg.test(fPath) ) { 
              jsonFiles.push(fPath);
            }
        });
    }
    findJsonFile(jsonPath);
    console.log(jsonFiles);
}
 
getJsonFiles("./docs/");
