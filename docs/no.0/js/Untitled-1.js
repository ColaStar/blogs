// "use strict" 
var a = {
    n: 1
};
var b = a;
a.x = a = {
    n: 2
};
console.log(a, b); //true

// { n: 2 } { n: 1, x: { n: 2 } }

// https://www.cnblogs.com/xxcanghai/p/4998076.html

function test() {
    console.log(1)
}

function init() {
    if (false) {
        function test() {
            console.log(1)
        }
    }
    test()
}
init()

