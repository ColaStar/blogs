// 1.请写出弹出值，并解释为什么。(5分)
        console.log(a)   //function a (){}
        a();               //10
        var a = 3;
        function a() {
            console.log(10)
        }
        console.log(a)  //3
        a = 6;
        a();   //a is not a function
//练习

// 1.变量提升只提升变量名，
// var a =1 过程 :
// var a;
// a= 1
// 2.函数提升 提升整个函数体，   注意  函数声明会被提升，但是函数表达式却不会被提升
// 3.函数提升优先于变量提升即同名变量与函数同时声明函数会覆盖变量
// var a =1 function a (){}过程 :
// function a(){};
// var a;
// a= 1
//4.当在if else中函数提升会发生只提升变量名而不提升函数体


console.log(a) // undefined
a()
var a = 9
// // var a = function(){}
if(true){
    function a(){
        console.log(10)
    }
}
a()
console.log(a)


console.log(a);   //undefined
console.log(typeof yideng(a));  //a is not a function
var flag = true;
if(!flag){
    var a = 1
}
if(flag){
    function yideng(a){
        yideng = a;  //如果在一个函数作用域会覆盖同名函数 
        console.log('yideng1')
    }
}else{
    function yideng(a){
        yideng = a;
        console.log('yideng2')
    }
}

