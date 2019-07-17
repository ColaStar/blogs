//数字类型
// 数字类型可以是双精度 64 位浮点值
let a:number = 2222;
let v:number = undefined;
let v:number = null;
//字符串类型
let str:string = '222'

//布尔值
let boolean = true;
let isflag:boolean = true
let isdone:boolean = false

//数组
// 在元素类型后面加上[]
let arr: number[] = [undefined, 2];
let arr1: string[] = [undefined, '2'];
let arr2: boolean[] = [true, false];
let arr3: string[] = [];

// 或者使用数组泛型
let arr4: Array<number> = [1, 2];
let arr5: Array<string> = ['1', '2'];
let arr6: Array<boolean> = [true, false];

//枚举

// enum Color {Red, Green, Blue}
// let c: Color = Color.Green;


// enum Color {Red = 1, Green, Blue}
// let c: Color = Color.Green;

// enum Color {Red = 1, Green = 2, Blue = 4}
// let c: Color = Color.Green;
// console.log(Color)

enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2

let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)


let unusable: void


// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
    throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
    while (true) {
    }
}