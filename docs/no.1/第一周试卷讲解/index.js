// 请写下如下代码输出值，并解释为什么？
console.log(a);  //undefinedJ //yideng is not a function 
var flag = true;
if(!flag){
    var a = 1;
}
if(flag){
    function yideng(a){
        yideng = a;
        console.log("yideng1")
    }
}else{
    function yideng(){
        yideng  = a;
        console.log('yideng2')
    }
}

// 多个浏览器结果会不一样
// 在火狐谷歌ie6以上实测输出 undefined 与yideng is not a function
// 在ie6以下 输出undefined  undefined  yideng2 undefined 
