// //数字类型
// // 数字类型可以是双精度 64 位浮点值
// var a = 2222;
// var v = undefined;
// var v = null;
// //字符串类型
// var str = '222';
// //布尔值
// var boolean = true;
// var isflag = true;
// var isdone = false;
// //数组
// // 在元素类型后面加上[]
// var arr = [undefined, 2];
// var arr1 = [undefined, '2'];
// var arr2 = [true, false];
// var arr3 = [];
// // 或者使用数组泛型
// var arr4 = [1, 2];
// var arr5 = ['1', '2'];
// var arr6 = [true, false];
// //枚举
// // enum Color {Red, Green, Blue}
// // let c: Color = Color.Green;
// // enum Color {Red = 1, Green, Blue}
// // let c: Color = Color.Green;
// // enum Color {Red = 1, Green = 2, Blue = 4}
// // let c: Color = Color.Green;
// // console.log(Color)
// var Color;
// (function (Color) {
//     Color[Color["Red"] = 1] = "Red";
//     Color[Color["Green"] = 2] = "Green";
//     Color[Color["Blue"] = 3] = "Blue";
// })(Color || (Color = {}));
// var colorName = Color[2];
// console.log(colorName); // 显示'Green'因为上面代码里它的值是2
// var notSure = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// var unusable;
// // 返回never的函数必须存在无法达到的终点
// function error(message) {
//     throw new Error(message);
// }
// // 推断的返回值类型为never
// function fail() {
//     return error("Something failed");
// }
// // 返回never的函数必须存在无法达到的终点
// function infiniteLoop() {
//     while (true) {
//     }
// }
// // 接口规则
// // interface obj
// function createdsquare(a, b, c) {
//     console.log(a, b, c);
// }
// createdsquare('1', true, 3);

class Animal {
    move(distanceInMeters) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    bark() {
        console.log('Woof! Woof!');
    }
}

const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark()