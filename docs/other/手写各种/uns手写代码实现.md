## 手写new

```
function new (fun){
  if(typeof fun !== 'function'){
     throw Error(`${fun} is not a function` )
  }
  var obj = {}
  obj.__proto__ = fun.prototype;
  var result = fun.apply(obj,Array.prototype.slice(arguments,1))
  return result
}
```
## 手写JSON.stringify

```

```
## 手写JSON.parse