# jasmine官方api参考

## 简介

jasmine 是一个**行为驱动开发(TDD)**测试框架， 一个js测试框架，它不依赖于浏览器、dom或其他js框架

jasmine有十分简介的语法

## 语法
### 分组 describe()

`describe`的作用的群组相关的测试,` describe`是可以嵌套的 从外到内 walkdown describe层级的 `beforeEach`, 由内到外walkup describe层级的 `afterEach`
```
describe('a suite', function(){ //这是一个测试分组
    it('with an expactation',function(){
        expect(true).toBe(true);
    });
});
```
### 测试it()

`describe` 和 `it` 都是函数，所以它们可以包含任何js代码， 在 `describe` 中声明的变量和方法，能在 `it` 中被访问。

`it` 代表的是具体的测试，当其中所有的断言都为`true`时，则该测试通过； 否则测试失败
```
describe('a suit is just a function', function(){
    var a = 10;
    it('and here is a test', function(){
        var a = true;
        expect(a).toBe(true);
    });
}); 
```
### 期望expect()
```
desribe('the "toBe" matcher compares with "===" ', function(){
    it('positive expect', function(){
        expect(true).toBe(true);
    });

    it('negative expect', function(){
        expect(false).not.toBe(true);
    });
});
```
### 匹配 to*() 

每个匹配方法在期望值和实际值之间执行逻辑比较，它负责告诉**jasmine断言的真假**，**从而决定测试的成功或失败**。
肯定断言 `expect(true).toBe(true)`;
否定断言 `expect(false).not.toBe(true)`;

jasmine有很丰富的匹配方法，而且可以自定义匹配方法。 内置的匹配方法有：

- toBe()             基本类型判断
- toEqual()          除了能判断基本类型（相当于"toBe"），还能判断对象
- toMatch()          使用正则表达式判断
- toBeDefined()      判断是否定义
- toBeUndefined()    判断是否是undefined，与"toBeDefined"相反
- toBeNull()         判断是否为null
- toBeTruthy()       判断是否是true
- toBeFalsy()        判断是否是false
- toContain()        判断数组是否包含（可判断基本类型和对象）
- toBeLessThan()     判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）
- toBeGreaterThan()  判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）
- toBeCloseTo()      判断数字是否相似（第二个参数为小数精度，默认为2位）
- toThrow()          判断是否抛出异常
- toThrowError()     判断是否抛出了指定的错误
- fail()             函数能使一个测试用例失败，参数为自定义的失败信息
```
  describe("included matchers", function(){
      //基本类型判断
      it("The 'toBe' matcher compares with ===", function(){
          var a = 12;
          var b = a;
          expect(a).toBe(b);
          expect(a).not.toBe(null);
      });

      describe("The 'toEqual' matcher", function(){
          //基本类型判断
          it('work for simple literals and variable', function(){
              var a = 12;
              expect(a).toEqual(12);
          });
          //对象判断
          it('should work for objects', function(){
              var foo = {
                  a: 12,
                  b: 23
              };
              var bar = {
                  a: 12,
                  b: 23
              };

              expect(foo).toEqual(bar); //true?
          });
      });
      //"toMatch"使用正则表达式判断
      it('"toMatch" matcher is for regular expression', function(){
          var message = "foo bar baz";
          expect(message).toMatch(/bar/);
          expect(message).toMatch("bar");
          expect(message).not.toMatch(/quue/);
      });
       //"toBeDefined"判断是否定义
      it("The 'toBeDefined' matcher compares against 'undefined'", function() {
          var a = {
            foo: "foo"
          };
          expect(a.foo).toBeDefined();
          expect(a.bar).not.toBeDefined();
      });
      //"toBeUndefined"判断是否是undefined，与"toBeDefined"相反
      it("The 'toBeUndefined" matcher compares against "undefined"', function(){
          var a = {
              foo: "foo"
          };

          expect(a.foo).not.toBeUndefined();
          expect(a.bar).toBeUndefined();
      });
      //"toBeNull"判断是否为null
      it(' "toBeNull" matcher compares against "null"', function(){
          var a = null;
          var foo = 'foo';

          expect(null).toBeNull();
          expect(a).toBeNull();
          expect(foo).not.toBeNull();
      });
      //"toBeTruthy"判断是否是true
      it("The 'toBeTruthy" matcher is for boolean casting testing' , function(){
          var a, foo = 'foo';
          expect(foo).toBeTruthy();
          expect(a).not.toBeTruthy();
      });
      //"toBeFalsy"判断是否是false
      it("The 'toBeFalsy' matcher is for boolean casting testing", function() {
            var a, foo = "foo";
            expect(a).toBeFalsy();
            expect(foo).not.toBeFalsy();
            expect(false).toBeFalsy();
      });
      //"toContain"判断数组是否包含（可判断基本类型和对象）
      it("The 'toContain' matcher is for finding an item in an array', function(){
          var a = ['foo', 'bar', 'baz'];
          expect(a).toContain('bar');
          expect(a).not.toContain('quu');
      });
      //"toBeLessThan"判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）
      it('"toBeLessThan" matcher is for math comparisons', function(){
          var n = 2.23, e = 1.33;
          expect(e).toBeLessThan(n);
          expect(n).not.toBeLessThan(e);
      });
      //"toBeGreaterThan"判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）
      it("The 'toBeGreaterThan' matcher is for mathematical comparisons", function() {
          var pi = 3.1415926,
            e = 2.78;
          expect(pi).toBeGreaterThan(e);
          expect(e).not.toBeGreaterThan(pi);
          expect("a").not.toBeGreaterThan("b");
          expect("b").toBeGreaterThan("a");
      });
      //"toBeCloseTo"判断数字是否相似（第二个参数为小数精度，默认为2位）
      it('"toBeCloseTo" matcher is for precision match comparison', function(){
          var n = 1.99, e = 2.35;
          expect(e).not.toBeCloseTo(n, 2);
          expect(e).toBeCloseTo(n, 0);
      });
      //"toThrow"判断是否抛出异常
      it("The 'toThrow' matcher is for testing if a function throws an exception", function() {
            var foo = function() {
                return 1 + 2;
            };
            var bar = function() {
                return a + 1;
            };
            expect(foo).not.toThrow();
            expect(bar).toThrow();
      });
      //"toThrowError"判断是否抛出了指定的错误
      it('"toThrowError" matcher is for testing a specific thrown exception', function(){
          var foo = function(){
              throw new TypeError('foo bar baz');
          };
          expect(foo).toThrowError('foo bar baz');
          expect(foo).toThrowError(/bar/);
          expect(foo).toThrowError(TypeError);
          expect(foo).toThrowError(TypeError, 'foo bar baz');
      });
      //fail"函数能使一个测试用例失败，参数为自定义的失败信息
       describe("A spec using the fail function", function() {
        var foo = function(x, callBack) {
            if (x) {
                callBack();
            }
        };
 
        it("should not call the callBack", function() {
            foo(false, function() {
                fail("Callback has been called");
            });
        });
    });
  });
```
### 设置和清理 beforeEach(), afterEach()
`beforeEach()` 在它所属的 `describe` 块中的每条测试执行前，先执行的js代码， 作用就是设置和初始化一些东西。
`afterEach()` 和 `beforeEach` 相反，在 `describe` 块的每条测试执行后执行， 做一些清理的工作。
```
describe('tests with "setup" and "tear-down"', function(){
    var foo;
    beforeEach(function(){
        foo = 0;
        foo += 1; //每次测试前都初始化 foo == 1
    });

    afterEach(function(){
        foo = 0; //每次测试完都重置 foo = 0;
    });

    it('it is just a function , so can contain any code', function(){
        expect(foo).toEqual(1);

    });

    it('can have more than one expectation', function(){
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });
});
```

### this对象
另一种在 `beforeEach` `afterEach` `it` 之间共享变量的方法： `this`对象, 每次执行完1条测试之后，`this `都会被重置为空对象
```
describe('a suite', function(){
    beforeEach(function(){
        this.foo = 0;
    });

    it('can use "this" to share initial data', function(){
        expect(this.foo).toEqual(0);
        this.bar = "test pollution?";
    });

    it('prevents test pollution by having an empty "this" created for next test', function(){
        expect(this.foo).toEqual(0);
        expect(this.bar).toBe(undefined);
    });
});
```

### describe嵌套 beforeEach串行
```
describe('a suite', function(){
    var foo;
    beforeEach(function(){
        foo = 0;
        foo += 1;
    });
    afterEach(function(){
        foo = 0;
    });

    it('a spec', function(){
        expect(foo).toEqual(1);
    });
    it('a spec too', function(){
        expect(foo).toEqual(1);
        expect(true).toEqual(true);
    });

    describe('nested inside describe', function(){
        var bar; 

        beforeEach(function(){
            bar = 1;
        });

        // exec outer's describe beforeEach > this describe's beforeEach
        it('可以访问外部describe的beforeEach的变量', function(){
            expect(foo).toEqual(bar);
        });
    });
});
```
### 禁用describe或it

`xdescribe(), xit() 和 pending()`
```
xdescribe('a suite',function(){
    //will not execute
});

describe('a suite too', function(){
    xit('this test be canceled', function(){
        expect(true).toBe(false);
    });

    it('can be desclared with "it" but without a function');

    if('can be declared by calling "pending()" in spec body', function(){
        expect(true).toBe(false);
        pending(); //禁用该测试
    });
});
```
### 函数调用监听 spy

`spyOn() , toHaveBeenCalled() , toHaveBeenCalledWith()`
```
describe('a spy', function(){
    var foo, bar = null;
    beforeEach(function(){
        foo = {
            setBar = function(value){
                bar = value;
            };
        };

        spyOn(foo, 'setBar');

        foo.setBar(123);
        foo.setBar(456, 'another param');
    });

    it('tracks that the spy was called', function(){
        expect(foo.setBar).toHaveBeenCalled();
    });

    it('tracks all the arguments of its calls', function(){
        expect(foo.setBar).toHaveBeenCalledWith(123);
        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
    });

    it('stops all execution on a function', function(){
        expect(bar).toBeNull(); //setBar函数的执行 被spy监听器暂停了。
    });
});

describe('a spy, when configured to call through', function(){
    var foo , bar, fetchedBar;

    beforeEach(function(){
        foo = {
            setBar: function(value){
                bar = value;
            },
            getBar: function(){
                return bar;
            }
        };

        spyOn(foo, 'getBar').and.callThrough();

        foo.setBar(123);
        fetchedBar = foo.getBar();
    });

    it('tracks that the spy was called', function(){
        expect(foo.getBar).toHaveBeenCalled();
    });
    
    it('should not effect other function', function(){
        expect(bar).toEqual(123);
    });

    it('when called returns the requested value' , function(){
        expect(fetchedBar).toEqual(123);
    })
});
```