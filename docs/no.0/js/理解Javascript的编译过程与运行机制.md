# 理解Javascript的编译过程与运行机制

JavaScript运行四部曲
- 1.词法分析（把输入的字符串分解为一些对编程语言有意义的代码块（词法单元）。）
- 2.语法分析（将上一步的词法单元集合分析并最终转换为一个有元素逐级嵌套所组成的代表了程序语法结构的树，称为抽象语法树（AST））
- 3.代码生成（将AST转换为可执行代码的过程称被称为代码生成）
- 4.预编译（预编译简单理解就是在内存中开辟一些空间，存放一些变量与函数；遇到函数的时候其实只有在执行函数的时候才会预编译那一部分）
- 5.解析执行（执行代码）（作用域LSH、RHS）

## 词法分析

这一步可以叫做分词/词法分析：
```
var a = 2;
```
这个过程会讲字符串分割为一个个词法单元如上`var`、`a`、`=`、`2`(空格算不算词法单元取决于空格对于该编程语言是否有意义)；这些零散的词法单元会组成一个词法单元流（数组）进行解析。

## 解析/语法分析：

这个过程是把各个词法单元转换为AST语法树，[在线解析工具](https://link.jianshu.com/?t=http%3A%2F%2Fesprima.org%2Fdemo%2Fparse.html)
"`var a = 2;`" 的词法单元流就会被解析为下边的AST树

<a data-fancybox title="" href="https://colastar.github.io/static/images/语法分析AST.png">![](https://colastar.github.io/static/images/语法分析AST.png)</a>

来个复杂点的
```
 if(typeof a == "undefined" ){ a = 0; } else { a = a; } alert(a);
```
生成的AST语法树
```
{
    "type": "Program",
    "body": [
        {
            "type": "IfStatement",
            "test": {
                "type": "BinaryExpression",
                "operator": "==",
                "left": {
                    "type": "UnaryExpression",
                    "operator": "typeof",
                    "argument": {
                        "type": "Identifier",
                        "name": "a"
                    },
                    "prefix": true
                },
                "right": {
                    "type": "Literal",
                    "value": "undefined",
                    "raw": "\"undefined\""
                }
            },
            "consequent": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 0,
                                "raw": "0"
                            }
                        }
                    }
                ]
            },
            "alternate": {
                "type": "BlockStatement",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "operator": "=",
                            "left": {
                                "type": "Identifier",
                                "name": "a"
                            },
                            "right": {
                                "type": "Literal",
                                "value": 2,
                                "raw": "2"
                            }
                        }
                    }
                ]
            }
        },
        {
            "type": "ExpressionStatement",
            "expression": {
                "type": "CallExpression",
                "callee": {
                    "type": "Identifier",
                    "name": "alert"
                },
                "arguments": [
                    {
                        "type": "Identifier",
                        "name": "a"
                    }
                ]
            }
        }
    ],
    "sourceType": "script"
}
```

## 代码生成：

将 AST 代码转换为可执行代码。简单来说，就是将 AST 转化为一组机器指令，用来创建一个叫做 a 的变量（包括分配内存等），并将一个值 10 存储在 a 中。

## 预编译
‘function函数’是一等公民！在进行预编译的时候会预先声明变量，再预定义函数声明（这就是为什么函数声明优先于变量声明）。

预编译一般发生在script脚本和函数执行之前，

> 在script脚本执行前
举个例子：
```
<script>
    var a = 1; // 变量声明
    var b = 2  // 变量声明
    function b(y){ // 函数声明
         var y;
        var s = 2;
        function s(){};//这个是函数声明
        var e = 0;
        console.log(x,y,e);
    };
    var c = function(){ // 是变量声明而不是函数声明！！
        // ...
    }
    b(100);
</script>
<script>
    var d = 0;
</script>
```
- 1.首先会创建一个全局对象GO（Global Object）
- 2.第一个脚本文件加载
- 3.脚本加载完毕后，分析语法是否合法（语法分析）
- 4.开始 预编译
  - a、查找变量声明，作为GO属性，值赋予undefined
  - b、查找函数声明，作为GO属性，值赋予函数体
```
//第四步a动作 伪代码
GO/window/Golbal = {
    a:undefined,
    b:undefined,
    c:undefined
}
//第四步b动作 伪代码
GO/window/Golbal = {
    a:undefined,
    b:function(){
        var y;
        var s = 2;
        function s(){};//这个是函数声明
        var e = 0;
       console.log(x,y,e);
    },
    c:undefined
}
```
解析执行代码（直到执行b函数）
```
// 伪代码
GO/window = {
    // 变量随着执行流得到初始化
    a: 1,
    c: function(){
        // ...
    },
    b: function(x,y){
        var y;
        var x = 2;
        function x(){};//这个是函数声明
        var e = 0;
        console.log(x,y,e);
    }
}
window.b(20,10)
```
执行b函数之前发生了预编译

- 创建AO活动对象（Active Object）
- 将函数内所有的形参和变量声明（的名）储存到ao对象中，value为undifined
```
AO{
y:undefined,
x:undefined,
e:undefined
}
```
- 实参值赋给型参
```
AO{
y:10,
x:undefined,
e:undefined
}
```
- 将所有的函数声明的函数名作为ao对象中的key,函数整体内容为value储存到ao对象中
```
AO{
y:10,
x:function(){},
e:undefined
}
```
- 最后函数执行输出结果为
```
function x(){}  10 0 
```

> 总结：

- 预编译(函数执行前)

1. 创建AO对象（Active Object） 
2. 查找函数形参及函数内变量声明，形参名及变量名作为AO对象的属性，值为undefined 
3. 实参形参相统一，实参值赋给形参 
4. 查找函数声明，函数名作为AO对象的属性，值为函数引用

- 预编译(脚本代码块script执行前) 
1. 查找全局变量声明（包括隐式全局变量声明，省略var声明），变量名作全局对象的属性，值为undefined 
2. 查找函数声明，函数名作为全局对象的属性，值为函数引用

## 代码执行



[js的解析与执行过程](https://www.cnblogs.com/lark-/p/7954047.html)
