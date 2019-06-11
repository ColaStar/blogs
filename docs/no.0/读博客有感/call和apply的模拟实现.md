call 和 apply 的模拟实现
------------------------------------------------------------------------------------------------

> call: 在使用一个指定的 this 值和若干个指定的参数的前提下调用某个函数或方法。

```
var foo = {
  value: 1
};

function bar() {
  console.log(this.value);
}

bar.call(foo);	// 1

```
注意有俩点：
- call 改变了 this 的指向，指向到 foo
- bar 函数执行了

#### Version 1
1.将函数设为对象的属性
2.执行该函数
3.删除该属性
```
第一步：
foo.fn = bar
foo.fn();
delete foo.fn;
```

```
bar.call(foo);	// 1
Function.prototype.call2 = function(context){
context.fn = this;
context.fn();
delete context.fn();
}

// 测试一下
var foo = {
  value: 1
};

function bar() {
    console.log(this.value);
}

bar.call2(foo); // 1
```

#### Version 2

加入不定长参数。

```
Function.prototype.call2(context){
    context.fn = this;
    var args = [];
    for(var i = 1;i<arguments.length;i++){
        args.push('arguments[' + i + ']');//执行的是arguments字符串方便下边eval
    }
    eval('context.fn(' + args    + ')');
    delete context.fn
}

// 测试一下
var foo = {
  value: 1
};


function bar(name, age) {
  console.log(name);
  console.log(age);
  console.log(this.value);
}

bar.call2(foo, 'kevin', 18);

// kevin
// 18
// 1
```

#### Version 3

1.this参数可以传null, 当为null的时候，视为指向window
2.函数是可以由返回值的
```
Function.prototype.call2 = function(context){
   var context = context || window;
   context.fn = this;
   var args = [];
   for(var i = 1;i<arguments.length;i++){
      args.push('arguments[' + i + ']');
   }
    var result = eval('context.fn(' + args + ')');
   delete context.fn
   return result
}

// 测试一下
var value = 2;

var obj = {
  value: 1
};

function bar(name, age) {
  console.log(this.value);
  return {
    value: this.value,
    name: name,
    age: age
  }
}

bar.call2(null);	// 2

console.log(bar.call2(obj, 'kevin', 18));
// 1
// Object {
//    value: 1,
//    name: 'kevin',
//    age: 18
// }
```

#### 模拟call总结
- 将函数设为对象的方法
- 执行该方法
- 删除该方法
- 加入不定长的参数
- 考虑null参数情况：this参数可以传null, 当为null的时候，视为指向window
- 返回函数返回值



apply的模拟实现
------------------------------------------------------------------------------------------------
```
Function.prototype.apply = function(context,arr){

    var context = context || window;
    context.fn = this;
    var result;
    if(!arr){
        context.fn();
    }else{
    var args = [];
    for(var i = 0;i<arr.length;i++){
        args.push('arr['+i+']')
    }    
    
    result = eval('context.fn(' + args + ')');
    }
    delete context.fn;
    return result
}
```