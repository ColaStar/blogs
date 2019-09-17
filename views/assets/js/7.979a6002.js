(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{171:function(n,s,a){"use strict";a.r(s);var e=a(0),t=Object(e.a)({},function(){var n=this,s=n.$createElement,a=n._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"jasmine官方api参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jasmine官方api参考","aria-hidden":"true"}},[n._v("#")]),n._v(" jasmine官方api参考")]),n._v(" "),a("h2",{attrs:{id:"简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简介","aria-hidden":"true"}},[n._v("#")]),n._v(" 简介")]),n._v(" "),a("p",[n._v("jasmine 是一个**行为驱动开发(TDD)**测试框架， 一个js测试框架，它不依赖于浏览器、dom或其他js框架")]),n._v(" "),a("p",[n._v("jasmine有十分简介的语法")]),n._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法","aria-hidden":"true"}},[n._v("#")]),n._v(" 语法")]),n._v(" "),a("h3",{attrs:{id:"分组-describe"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分组-describe","aria-hidden":"true"}},[n._v("#")]),n._v(" 分组 describe()")]),n._v(" "),a("p",[a("code",[n._v("describe")]),n._v("的作用的群组相关的测试,"),a("code",[n._v("describe")]),n._v("是可以嵌套的 从外到内 walkdown describe层级的 "),a("code",[n._v("beforeEach")]),n._v(", 由内到外walkup describe层级的 "),a("code",[n._v("afterEach")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('a suite', function(){ //这是一个测试分组\n    it('with an expactation',function(){\n        expect(true).toBe(true);\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br")])]),a("h3",{attrs:{id:"测试it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试it","aria-hidden":"true"}},[n._v("#")]),n._v(" 测试it()")]),n._v(" "),a("p",[a("code",[n._v("describe")]),n._v(" 和 "),a("code",[n._v("it")]),n._v(" 都是函数，所以它们可以包含任何js代码， 在 "),a("code",[n._v("describe")]),n._v(" 中声明的变量和方法，能在 "),a("code",[n._v("it")]),n._v(" 中被访问。")]),n._v(" "),a("p",[a("code",[n._v("it")]),n._v(" 代表的是具体的测试，当其中所有的断言都为"),a("code",[n._v("true")]),n._v("时，则该测试通过； 否则测试失败")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('a suit is just a function', function(){\n    var a = 10;\n    it('and here is a test', function(){\n        var a = true;\n        expect(a).toBe(true);\n    });\n}); \n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br")])]),a("h3",{attrs:{id:"期望expect"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#期望expect","aria-hidden":"true"}},[n._v("#")]),n._v(" 期望expect()")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("desribe('the \"toBe\" matcher compares with \"===\" ', function(){\n    it('positive expect', function(){\n        expect(true).toBe(true);\n    });\n\n    it('negative expect', function(){\n        expect(false).not.toBe(true);\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br")])]),a("h3",{attrs:{id:"匹配-to"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#匹配-to","aria-hidden":"true"}},[n._v("#")]),n._v(" 匹配 to*()")]),n._v(" "),a("p",[n._v("每个匹配方法在期望值和实际值之间执行逻辑比较，它负责告诉"),a("strong",[n._v("jasmine断言的真假")]),n._v("，"),a("strong",[n._v("从而决定测试的成功或失败")]),n._v("。\n肯定断言 "),a("code",[n._v("expect(true).toBe(true)")]),n._v(";\n否定断言 "),a("code",[n._v("expect(false).not.toBe(true)")]),n._v(";")]),n._v(" "),a("p",[n._v("jasmine有很丰富的匹配方法，而且可以自定义匹配方法。 内置的匹配方法有：")]),n._v(" "),a("ul",[a("li",[n._v("toBe()             基本类型判断")]),n._v(" "),a("li",[n._v('toEqual()          除了能判断基本类型（相当于"toBe"），还能判断对象')]),n._v(" "),a("li",[n._v("toMatch()          使用正则表达式判断")]),n._v(" "),a("li",[n._v("toBeDefined()      判断是否定义")]),n._v(" "),a("li",[n._v('toBeUndefined()    判断是否是undefined，与"toBeDefined"相反')]),n._v(" "),a("li",[n._v("toBeNull()         判断是否为null")]),n._v(" "),a("li",[n._v("toBeTruthy()       判断是否是true")]),n._v(" "),a("li",[n._v("toBeFalsy()        判断是否是false")]),n._v(" "),a("li",[n._v("toContain()        判断数组是否包含（可判断基本类型和对象）")]),n._v(" "),a("li",[n._v("toBeLessThan()     判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）")]),n._v(" "),a("li",[n._v("toBeGreaterThan()  判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）")]),n._v(" "),a("li",[n._v("toBeCloseTo()      判断数字是否相似（第二个参数为小数精度，默认为2位）")]),n._v(" "),a("li",[n._v("toThrow()          判断是否抛出异常")]),n._v(" "),a("li",[n._v("toThrowError()     判断是否抛出了指定的错误")]),n._v(" "),a("li",[n._v("fail()             函数能使一个测试用例失败，参数为自定义的失败信息")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v('  describe("included matchers", function(){\n      //基本类型判断\n      it("The \'toBe\' matcher compares with ===", function(){\n          var a = 12;\n          var b = a;\n          expect(a).toBe(b);\n          expect(a).not.toBe(null);\n      });\n\n      describe("The \'toEqual\' matcher", function(){\n          //基本类型判断\n          it(\'work for simple literals and variable\', function(){\n              var a = 12;\n              expect(a).toEqual(12);\n          });\n          //对象判断\n          it(\'should work for objects\', function(){\n              var foo = {\n                  a: 12,\n                  b: 23\n              };\n              var bar = {\n                  a: 12,\n                  b: 23\n              };\n\n              expect(foo).toEqual(bar); //true?\n          });\n      });\n      //"toMatch"使用正则表达式判断\n      it(\'"toMatch" matcher is for regular expression\', function(){\n          var message = "foo bar baz";\n          expect(message).toMatch(/bar/);\n          expect(message).toMatch("bar");\n          expect(message).not.toMatch(/quue/);\n      });\n       //"toBeDefined"判断是否定义\n      it("The \'toBeDefined\' matcher compares against \'undefined\'", function() {\n          var a = {\n            foo: "foo"\n          };\n          expect(a.foo).toBeDefined();\n          expect(a.bar).not.toBeDefined();\n      });\n      //"toBeUndefined"判断是否是undefined，与"toBeDefined"相反\n      it("The \'toBeUndefined" matcher compares against "undefined"\', function(){\n          var a = {\n              foo: "foo"\n          };\n\n          expect(a.foo).not.toBeUndefined();\n          expect(a.bar).toBeUndefined();\n      });\n      //"toBeNull"判断是否为null\n      it(\' "toBeNull" matcher compares against "null"\', function(){\n          var a = null;\n          var foo = \'foo\';\n\n          expect(null).toBeNull();\n          expect(a).toBeNull();\n          expect(foo).not.toBeNull();\n      });\n      //"toBeTruthy"判断是否是true\n      it("The \'toBeTruthy" matcher is for boolean casting testing\' , function(){\n          var a, foo = \'foo\';\n          expect(foo).toBeTruthy();\n          expect(a).not.toBeTruthy();\n      });\n      //"toBeFalsy"判断是否是false\n      it("The \'toBeFalsy\' matcher is for boolean casting testing", function() {\n            var a, foo = "foo";\n            expect(a).toBeFalsy();\n            expect(foo).not.toBeFalsy();\n            expect(false).toBeFalsy();\n      });\n      //"toContain"判断数组是否包含（可判断基本类型和对象）\n      it("The \'toContain\' matcher is for finding an item in an array\', function(){\n          var a = [\'foo\', \'bar\', \'baz\'];\n          expect(a).toContain(\'bar\');\n          expect(a).not.toContain(\'quu\');\n      });\n      //"toBeLessThan"判断值类型的大小，结果若小则为True（也可以判断字符及字符串，以ascii码的大小为判断依据）\n      it(\'"toBeLessThan" matcher is for math comparisons\', function(){\n          var n = 2.23, e = 1.33;\n          expect(e).toBeLessThan(n);\n          expect(n).not.toBeLessThan(e);\n      });\n      //"toBeGreaterThan"判断值类型的大小，结果若大则为True，与toBeLessThan相反（也可以判断字符及字符串，以ascii码的大小为判断依据）\n      it("The \'toBeGreaterThan\' matcher is for mathematical comparisons", function() {\n          var pi = 3.1415926,\n            e = 2.78;\n          expect(pi).toBeGreaterThan(e);\n          expect(e).not.toBeGreaterThan(pi);\n          expect("a").not.toBeGreaterThan("b");\n          expect("b").toBeGreaterThan("a");\n      });\n      //"toBeCloseTo"判断数字是否相似（第二个参数为小数精度，默认为2位）\n      it(\'"toBeCloseTo" matcher is for precision match comparison\', function(){\n          var n = 1.99, e = 2.35;\n          expect(e).not.toBeCloseTo(n, 2);\n          expect(e).toBeCloseTo(n, 0);\n      });\n      //"toThrow"判断是否抛出异常\n      it("The \'toThrow\' matcher is for testing if a function throws an exception", function() {\n            var foo = function() {\n                return 1 + 2;\n            };\n            var bar = function() {\n                return a + 1;\n            };\n            expect(foo).not.toThrow();\n            expect(bar).toThrow();\n      });\n      //"toThrowError"判断是否抛出了指定的错误\n      it(\'"toThrowError" matcher is for testing a specific thrown exception\', function(){\n          var foo = function(){\n              throw new TypeError(\'foo bar baz\');\n          };\n          expect(foo).toThrowError(\'foo bar baz\');\n          expect(foo).toThrowError(/bar/);\n          expect(foo).toThrowError(TypeError);\n          expect(foo).toThrowError(TypeError, \'foo bar baz\');\n      });\n      //fail"函数能使一个测试用例失败，参数为自定义的失败信息\n       describe("A spec using the fail function", function() {\n        var foo = function(x, callBack) {\n            if (x) {\n                callBack();\n            }\n        };\n \n        it("should not call the callBack", function() {\n            foo(false, function() {\n                fail("Callback has been called");\n            });\n        });\n    });\n  });\n')])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br"),a("span",{staticClass:"line-number"},[n._v("61")]),a("br"),a("span",{staticClass:"line-number"},[n._v("62")]),a("br"),a("span",{staticClass:"line-number"},[n._v("63")]),a("br"),a("span",{staticClass:"line-number"},[n._v("64")]),a("br"),a("span",{staticClass:"line-number"},[n._v("65")]),a("br"),a("span",{staticClass:"line-number"},[n._v("66")]),a("br"),a("span",{staticClass:"line-number"},[n._v("67")]),a("br"),a("span",{staticClass:"line-number"},[n._v("68")]),a("br"),a("span",{staticClass:"line-number"},[n._v("69")]),a("br"),a("span",{staticClass:"line-number"},[n._v("70")]),a("br"),a("span",{staticClass:"line-number"},[n._v("71")]),a("br"),a("span",{staticClass:"line-number"},[n._v("72")]),a("br"),a("span",{staticClass:"line-number"},[n._v("73")]),a("br"),a("span",{staticClass:"line-number"},[n._v("74")]),a("br"),a("span",{staticClass:"line-number"},[n._v("75")]),a("br"),a("span",{staticClass:"line-number"},[n._v("76")]),a("br"),a("span",{staticClass:"line-number"},[n._v("77")]),a("br"),a("span",{staticClass:"line-number"},[n._v("78")]),a("br"),a("span",{staticClass:"line-number"},[n._v("79")]),a("br"),a("span",{staticClass:"line-number"},[n._v("80")]),a("br"),a("span",{staticClass:"line-number"},[n._v("81")]),a("br"),a("span",{staticClass:"line-number"},[n._v("82")]),a("br"),a("span",{staticClass:"line-number"},[n._v("83")]),a("br"),a("span",{staticClass:"line-number"},[n._v("84")]),a("br"),a("span",{staticClass:"line-number"},[n._v("85")]),a("br"),a("span",{staticClass:"line-number"},[n._v("86")]),a("br"),a("span",{staticClass:"line-number"},[n._v("87")]),a("br"),a("span",{staticClass:"line-number"},[n._v("88")]),a("br"),a("span",{staticClass:"line-number"},[n._v("89")]),a("br"),a("span",{staticClass:"line-number"},[n._v("90")]),a("br"),a("span",{staticClass:"line-number"},[n._v("91")]),a("br"),a("span",{staticClass:"line-number"},[n._v("92")]),a("br"),a("span",{staticClass:"line-number"},[n._v("93")]),a("br"),a("span",{staticClass:"line-number"},[n._v("94")]),a("br"),a("span",{staticClass:"line-number"},[n._v("95")]),a("br"),a("span",{staticClass:"line-number"},[n._v("96")]),a("br"),a("span",{staticClass:"line-number"},[n._v("97")]),a("br"),a("span",{staticClass:"line-number"},[n._v("98")]),a("br"),a("span",{staticClass:"line-number"},[n._v("99")]),a("br"),a("span",{staticClass:"line-number"},[n._v("100")]),a("br"),a("span",{staticClass:"line-number"},[n._v("101")]),a("br"),a("span",{staticClass:"line-number"},[n._v("102")]),a("br"),a("span",{staticClass:"line-number"},[n._v("103")]),a("br"),a("span",{staticClass:"line-number"},[n._v("104")]),a("br"),a("span",{staticClass:"line-number"},[n._v("105")]),a("br"),a("span",{staticClass:"line-number"},[n._v("106")]),a("br"),a("span",{staticClass:"line-number"},[n._v("107")]),a("br"),a("span",{staticClass:"line-number"},[n._v("108")]),a("br"),a("span",{staticClass:"line-number"},[n._v("109")]),a("br"),a("span",{staticClass:"line-number"},[n._v("110")]),a("br"),a("span",{staticClass:"line-number"},[n._v("111")]),a("br"),a("span",{staticClass:"line-number"},[n._v("112")]),a("br"),a("span",{staticClass:"line-number"},[n._v("113")]),a("br"),a("span",{staticClass:"line-number"},[n._v("114")]),a("br"),a("span",{staticClass:"line-number"},[n._v("115")]),a("br"),a("span",{staticClass:"line-number"},[n._v("116")]),a("br"),a("span",{staticClass:"line-number"},[n._v("117")]),a("br"),a("span",{staticClass:"line-number"},[n._v("118")]),a("br"),a("span",{staticClass:"line-number"},[n._v("119")]),a("br"),a("span",{staticClass:"line-number"},[n._v("120")]),a("br"),a("span",{staticClass:"line-number"},[n._v("121")]),a("br"),a("span",{staticClass:"line-number"},[n._v("122")]),a("br"),a("span",{staticClass:"line-number"},[n._v("123")]),a("br"),a("span",{staticClass:"line-number"},[n._v("124")]),a("br"),a("span",{staticClass:"line-number"},[n._v("125")]),a("br"),a("span",{staticClass:"line-number"},[n._v("126")]),a("br"),a("span",{staticClass:"line-number"},[n._v("127")]),a("br"),a("span",{staticClass:"line-number"},[n._v("128")]),a("br"),a("span",{staticClass:"line-number"},[n._v("129")]),a("br"),a("span",{staticClass:"line-number"},[n._v("130")]),a("br"),a("span",{staticClass:"line-number"},[n._v("131")]),a("br"),a("span",{staticClass:"line-number"},[n._v("132")]),a("br"),a("span",{staticClass:"line-number"},[n._v("133")]),a("br"),a("span",{staticClass:"line-number"},[n._v("134")]),a("br"),a("span",{staticClass:"line-number"},[n._v("135")]),a("br"),a("span",{staticClass:"line-number"},[n._v("136")]),a("br"),a("span",{staticClass:"line-number"},[n._v("137")]),a("br"),a("span",{staticClass:"line-number"},[n._v("138")]),a("br")])]),a("h3",{attrs:{id:"设置和清理-beforeeach-aftereach"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置和清理-beforeeach-aftereach","aria-hidden":"true"}},[n._v("#")]),n._v(" 设置和清理 beforeEach(), afterEach()")]),n._v(" "),a("p",[a("code",[n._v("beforeEach()")]),n._v(" 在它所属的 "),a("code",[n._v("describe")]),n._v(" 块中的每条测试执行前，先执行的js代码， 作用就是设置和初始化一些东西。\n"),a("code",[n._v("afterEach()")]),n._v(" 和 "),a("code",[n._v("beforeEach")]),n._v(" 相反，在 "),a("code",[n._v("describe")]),n._v(" 块的每条测试执行后执行， 做一些清理的工作。")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('tests with \"setup\" and \"tear-down\"', function(){\n    var foo;\n    beforeEach(function(){\n        foo = 0;\n        foo += 1; //每次测试前都初始化 foo == 1\n    });\n\n    afterEach(function(){\n        foo = 0; //每次测试完都重置 foo = 0;\n    });\n\n    it('it is just a function , so can contain any code', function(){\n        expect(foo).toEqual(1);\n\n    });\n\n    it('can have more than one expectation', function(){\n        expect(foo).toEqual(1);\n        expect(true).toEqual(true);\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br")])]),a("h3",{attrs:{id:"this对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#this对象","aria-hidden":"true"}},[n._v("#")]),n._v(" this对象")]),n._v(" "),a("p",[n._v("另一种在 "),a("code",[n._v("beforeEach")]),n._v(" "),a("code",[n._v("afterEach")]),n._v(" "),a("code",[n._v("it")]),n._v(" 之间共享变量的方法： "),a("code",[n._v("this")]),n._v("对象, 每次执行完1条测试之后，"),a("code",[n._v("this")]),n._v("都会被重置为空对象")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('a suite', function(){\n    beforeEach(function(){\n        this.foo = 0;\n    });\n\n    it('can use \"this\" to share initial data', function(){\n        expect(this.foo).toEqual(0);\n        this.bar = \"test pollution?\";\n    });\n\n    it('prevents test pollution by having an empty \"this\" created for next test', function(){\n        expect(this.foo).toEqual(0);\n        expect(this.bar).toBe(undefined);\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br")])]),a("h3",{attrs:{id:"describe嵌套-beforeeach串行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#describe嵌套-beforeeach串行","aria-hidden":"true"}},[n._v("#")]),n._v(" describe嵌套 beforeEach串行")]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('a suite', function(){\n    var foo;\n    beforeEach(function(){\n        foo = 0;\n        foo += 1;\n    });\n    afterEach(function(){\n        foo = 0;\n    });\n\n    it('a spec', function(){\n        expect(foo).toEqual(1);\n    });\n    it('a spec too', function(){\n        expect(foo).toEqual(1);\n        expect(true).toEqual(true);\n    });\n\n    describe('nested inside describe', function(){\n        var bar; \n\n        beforeEach(function(){\n            bar = 1;\n        });\n\n        // exec outer's describe beforeEach > this describe's beforeEach\n        it('可以访问外部describe的beforeEach的变量', function(){\n            expect(foo).toEqual(bar);\n        });\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br")])]),a("h3",{attrs:{id:"禁用describe或it"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#禁用describe或it","aria-hidden":"true"}},[n._v("#")]),n._v(" 禁用describe或it")]),n._v(" "),a("p",[a("code",[n._v("xdescribe(), xit() 和 pending()")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("xdescribe('a suite',function(){\n    //will not execute\n});\n\ndescribe('a suite too', function(){\n    xit('this test be canceled', function(){\n        expect(true).toBe(false);\n    });\n\n    it('can be desclared with \"it\" but without a function');\n\n    if('can be declared by calling \"pending()\" in spec body', function(){\n        expect(true).toBe(false);\n        pending(); //禁用该测试\n    });\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br")])]),a("h3",{attrs:{id:"函数调用监听-spy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#函数调用监听-spy","aria-hidden":"true"}},[n._v("#")]),n._v(" 函数调用监听 spy")]),n._v(" "),a("p",[a("code",[n._v("spyOn() , toHaveBeenCalled() , toHaveBeenCalledWith()")])]),n._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[n._v("describe('a spy', function(){\n    var foo, bar = null;\n    beforeEach(function(){\n        foo = {\n            setBar = function(value){\n                bar = value;\n            };\n        };\n\n        spyOn(foo, 'setBar');\n\n        foo.setBar(123);\n        foo.setBar(456, 'another param');\n    });\n\n    it('tracks that the spy was called', function(){\n        expect(foo.setBar).toHaveBeenCalled();\n    });\n\n    it('tracks all the arguments of its calls', function(){\n        expect(foo.setBar).toHaveBeenCalledWith(123);\n        expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');\n    });\n\n    it('stops all execution on a function', function(){\n        expect(bar).toBeNull(); //setBar函数的执行 被spy监听器暂停了。\n    });\n});\n\ndescribe('a spy, when configured to call through', function(){\n    var foo , bar, fetchedBar;\n\n    beforeEach(function(){\n        foo = {\n            setBar: function(value){\n                bar = value;\n            },\n            getBar: function(){\n                return bar;\n            }\n        };\n\n        spyOn(foo, 'getBar').and.callThrough();\n\n        foo.setBar(123);\n        fetchedBar = foo.getBar();\n    });\n\n    it('tracks that the spy was called', function(){\n        expect(foo.getBar).toHaveBeenCalled();\n    });\n    \n    it('should not effect other function', function(){\n        expect(bar).toEqual(123);\n    });\n\n    it('when called returns the requested value' , function(){\n        expect(fetchedBar).toEqual(123);\n    })\n});\n")])]),n._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[n._v("1")]),a("br"),a("span",{staticClass:"line-number"},[n._v("2")]),a("br"),a("span",{staticClass:"line-number"},[n._v("3")]),a("br"),a("span",{staticClass:"line-number"},[n._v("4")]),a("br"),a("span",{staticClass:"line-number"},[n._v("5")]),a("br"),a("span",{staticClass:"line-number"},[n._v("6")]),a("br"),a("span",{staticClass:"line-number"},[n._v("7")]),a("br"),a("span",{staticClass:"line-number"},[n._v("8")]),a("br"),a("span",{staticClass:"line-number"},[n._v("9")]),a("br"),a("span",{staticClass:"line-number"},[n._v("10")]),a("br"),a("span",{staticClass:"line-number"},[n._v("11")]),a("br"),a("span",{staticClass:"line-number"},[n._v("12")]),a("br"),a("span",{staticClass:"line-number"},[n._v("13")]),a("br"),a("span",{staticClass:"line-number"},[n._v("14")]),a("br"),a("span",{staticClass:"line-number"},[n._v("15")]),a("br"),a("span",{staticClass:"line-number"},[n._v("16")]),a("br"),a("span",{staticClass:"line-number"},[n._v("17")]),a("br"),a("span",{staticClass:"line-number"},[n._v("18")]),a("br"),a("span",{staticClass:"line-number"},[n._v("19")]),a("br"),a("span",{staticClass:"line-number"},[n._v("20")]),a("br"),a("span",{staticClass:"line-number"},[n._v("21")]),a("br"),a("span",{staticClass:"line-number"},[n._v("22")]),a("br"),a("span",{staticClass:"line-number"},[n._v("23")]),a("br"),a("span",{staticClass:"line-number"},[n._v("24")]),a("br"),a("span",{staticClass:"line-number"},[n._v("25")]),a("br"),a("span",{staticClass:"line-number"},[n._v("26")]),a("br"),a("span",{staticClass:"line-number"},[n._v("27")]),a("br"),a("span",{staticClass:"line-number"},[n._v("28")]),a("br"),a("span",{staticClass:"line-number"},[n._v("29")]),a("br"),a("span",{staticClass:"line-number"},[n._v("30")]),a("br"),a("span",{staticClass:"line-number"},[n._v("31")]),a("br"),a("span",{staticClass:"line-number"},[n._v("32")]),a("br"),a("span",{staticClass:"line-number"},[n._v("33")]),a("br"),a("span",{staticClass:"line-number"},[n._v("34")]),a("br"),a("span",{staticClass:"line-number"},[n._v("35")]),a("br"),a("span",{staticClass:"line-number"},[n._v("36")]),a("br"),a("span",{staticClass:"line-number"},[n._v("37")]),a("br"),a("span",{staticClass:"line-number"},[n._v("38")]),a("br"),a("span",{staticClass:"line-number"},[n._v("39")]),a("br"),a("span",{staticClass:"line-number"},[n._v("40")]),a("br"),a("span",{staticClass:"line-number"},[n._v("41")]),a("br"),a("span",{staticClass:"line-number"},[n._v("42")]),a("br"),a("span",{staticClass:"line-number"},[n._v("43")]),a("br"),a("span",{staticClass:"line-number"},[n._v("44")]),a("br"),a("span",{staticClass:"line-number"},[n._v("45")]),a("br"),a("span",{staticClass:"line-number"},[n._v("46")]),a("br"),a("span",{staticClass:"line-number"},[n._v("47")]),a("br"),a("span",{staticClass:"line-number"},[n._v("48")]),a("br"),a("span",{staticClass:"line-number"},[n._v("49")]),a("br"),a("span",{staticClass:"line-number"},[n._v("50")]),a("br"),a("span",{staticClass:"line-number"},[n._v("51")]),a("br"),a("span",{staticClass:"line-number"},[n._v("52")]),a("br"),a("span",{staticClass:"line-number"},[n._v("53")]),a("br"),a("span",{staticClass:"line-number"},[n._v("54")]),a("br"),a("span",{staticClass:"line-number"},[n._v("55")]),a("br"),a("span",{staticClass:"line-number"},[n._v("56")]),a("br"),a("span",{staticClass:"line-number"},[n._v("57")]),a("br"),a("span",{staticClass:"line-number"},[n._v("58")]),a("br"),a("span",{staticClass:"line-number"},[n._v("59")]),a("br"),a("span",{staticClass:"line-number"},[n._v("60")]),a("br")])])])},[],!1,null,null,null);s.default=t.exports}}]);