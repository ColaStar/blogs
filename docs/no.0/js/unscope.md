<!-- 作用域与闭包 -->
1.js是函数级作用域函数级作用域，在内部的变量，内部度能访问，外部不能访问，内部能访问外部的
2.函数提升会优先于变量提升
```
(function() {
  var a = 20;
  function a() {};
  console.log(a);
  
  // 函数提升的优先级更高。所以这段代码是这样的
  function a() {}
  var a;
  a = 20;
  console.log(a);	// 20
})();
```

```
function test(){
   if(false){
       var i = 0;
   }
   console.log(i)//undefined
}
console.log(i)    //i is not defined   
```

```
var j =100;
~(function(){
    console.log(j)
})()

->
var j =100;
~function(){
    console.log(j)
}()
~使函数转换为表达式

```
> 闭包
拿到本不属于他的东西，容易造成内存泄露




