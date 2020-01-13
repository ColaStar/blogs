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
            // 只找md结尾的文件
            var reg = /.\md$/g
            //忽略一些文件打包
            var reg1 = /^un/g
            var pathList = fPath.split('/');
            var directory = pathList.slice(pathList.length-1)
            if (stat.isFile() === true&&reg.test(fPath) ) {
                let spath =  jsonPath.substring(2)
                if(!reg1.test(directory)){
                    nPath = fPath.replace(spath, '');
                    jsonFiles.push(nPath);
                }
             
            }
        });
    }
    findJsonFile(jsonPath);
    return jsonFiles
}
 
function getStr(index) {
    var strList = ["春江潮水连海平，海上明月共潮生。","滟滟随波千万里，何处春江无月明！","江流宛转绕芳甸，月照花林皆似霰。","空里流霜不觉飞，汀上白沙看不见。","江天一色无纤尘，皎皎空中孤月轮。","江畔何人初见月，江月何年初照人？","人生代代无穷已，江月年年只相似。","不知江月待何人，但见长江送流水。","白云一片去悠悠，青枫浦上不胜愁。","谁家今夜扁舟子，何处相思明月楼？","可怜楼上月徘徊，应照离人妆镜台。","玉户帘中卷不去，捣衣砧上拂还来。","此时相望不相闻，愿逐月华流照君。","鸿雁长飞光不度，鱼龙潜跃水成文。","昨夜闲潭梦落花，可怜春半不还家。","江水流春去欲尽，江潭落月复西斜。","斜月沉沉藏海雾，碣石潇湘无限路。","不知乘月几人归，落月摇情满江树。","春天的江潮水势浩荡，与大海连成一片，一轮明月从海上升起，好像与潮水一起涌出来。","月光照耀着春江，随着波浪闪耀千万里，所有地方的春江都有明亮的月光。","江水曲曲折折地绕着花草丛生的原野流淌，月光照射着开遍鲜花的树林好像细密的雪珠在闪烁。","月色如霜，所以霜飞无从觉察。洲上的白沙和月色融合在一起，看不分明。","江水、天空成一色，没有一点微小灰尘，明亮的天空中只有一轮孤月高悬空中。","江边上什么人最初看见月亮，江上的月亮哪一年最初照耀着人？","人生一代代地无穷无尽，只有江上的月亮一年年地总是相像。","不知江上的月亮等待着什么人，只见长江不断地一直运输着流水。","游子像一片白云缓缓地离去，只剩下思妇站在离别的青枫浦不胜忧愁。","哪家的游子今晚坐着小船在漂流？什么地方有人在明月照耀的楼上相思？","可怜楼上不停移动的月光，应该照耀着离人的梳妆台。","月光照进思妇的门帘，卷不走，照在她的捣衣砧上，拂不掉。","这时互相望着月亮可是互相听不到声音，我希望随着月光流去照耀着您。","鸿雁不停地飞翔，而不能飞出无边的月光；月照江面，鱼龙在水中跳跃，激起阵阵波纹。","昨天夜里梦见花落闲潭，可惜的是春天过了一半自己还不能回家。","江水带着春光将要流尽，水潭上的月亮又要西落。","斜月慢慢下沉，藏在海雾里，碣石与潇湘的离人距离无限遥远。","不知有几人能趁着月光回家，唯有那西落的月亮摇荡着离情，洒满了江边的树林。"]
    return strList[index]
  }
// console.log(getJsonFiles("./docs/no.0"));

// console.log(new getJsonFiles('/n'))
module.exports = exports = {getJsonFiles,getStr}
