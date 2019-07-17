# TypeScript入门

## 简介

### 什么是typeScript

首先，我对 TypeScript 的理解如下：

​TypeScript 是 JavaScript 的一个超集，主要提供了**类型系统**和对 **ES6** 的支持，它由**Microsoft** 开发，代码开源于 **GitHub** 上。

其次引用官网的定义：

> TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Any browser. Any host. Any OS. Open source.

翻译成中文即是：

> TypeScript 是 JavaScript 的类型的超集，它可以编译成纯 JavaScript。编译出来的 JavaScript 可以运行在任何浏览器上。TypeScript 编译工具可以运行在任何服务器和任何系统上。TypeScript 是开源的。

### 为什么选择 TypeScript

​TypeScript 官网列举了一些优势，不过我更愿意自己总结一下：

> TypeScript 增加了代码的可读性和可维护性

- 类型系统实际上是最好的文档，大部分的函数看看类型的定义就可以知道如何使用了

- 可以在编译阶段就发现大部分错误，这总比在运行时候出错好

- 增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等

> TypeScript 非常包容

- TypeScript 是 JavaScript 的超集，.js 文件可以直接重命名为 .ts 即可

- 即使不显式的定义类型，也能够自动做出类型推论​

- 可以定义从简单到复杂的几乎一切类型

- 即使 TypeScript 编译报错，也可以生成 JavaScript 文件

- 兼容第三方库，即使第三方库不是用 TypeScript 写的，也可以编写单独的类型文件供 `TypeScript` 读取

> TypeScript 拥有活跃的社区

- 大部分第三方库都有提供给 `TypeScript` 的类型定义文件

- `Google` 开发的 `Angular2` 就是使用 `TypeScript` 编写的
- `vue3` 就是使用 `TypeScript` 编写的

- `TypeScript` 拥抱了 `ES6` 规范，也支持部分 `ESNext` 草案的规范

> TypeScript 的缺点

任何事物都是有两面性的，我认为 TypeScript 的弊端在于：

- 有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念

- 短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本

- 集成到构建流程需要一些工作量

- 可能和一些库结合的不是很完美

所以大家可以根据自己团队和项目的情况判断是否需要使用 TypeScript。

## 安装typeScript

TypeScript 的命令行工具安装方法如下：

```
npm install -g typescript
```

以上命令会在全局环境下安装 `tsc` 命令，安装完成之后，我们就可以在任何地方执行 `tsc` 命令了。

编译一个 TypeScript 文件很简单：

```
tsc hello.ts
```

我们约定使用 `TypeScript` 编写的文件以 `.ts` 为后缀，用 `TypeScript` 编写 `React` 时，以 `.tsx` 为后缀。

> 编辑器
TypeScript 最大的优势便是增强了编辑器和 IDE 的功能，包括代码补全、接口提示、跳转到定义、重构等。

主流的编辑器都支持 `TypeScript`，这里我推荐使用 `Visual Studio Code`

它是一款开源，跨终端的轻量级编辑器，内置了 `TypeScript` 支持。
另外它本身也是用 `TypeScript` 编写的。

##  Hello TypeScript

我们从一个简单的例子开始。

将以下代码复制到 hello.ts 中：

```
function sayHello(person: string) {
    return 'Hello, ' + person;
}
​
let user = 'Tom';
console.log(sayHello(user));
```

然后执行

```
tsc hello.ts
```

这时候会生成一个编译好的文件 hello.js：

```
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
```

`TypeScript` 中，使用 `:`指定变量的类型，`:`**的前后有没有空格都可以**。

上述例子中，我们用 : 指定 `person` 参数类型为 string。但是编译为 js 之后，并没有什么检查的代码被插入进来。

**TypeScript 只会进行静态检查，如果发现有错误，编译的时候就会报错。**

let 是 ES6 中的关键字，和 var 类似，用于定义一个局部变量，可以参阅 let 和 const 命令。

下面尝试把这段代码编译一下：

```
function sayHello(person: string) {
    return 'Hello, ' + person;
}
​
let user = [0, 1, 2];
console.log(sayHello(user));
```

**编辑器中会提示错误，编译的时候也会出错：**

```
index.ts(6,22): error TS2345: Argument of type 'number[]' is not assignable to parameter of type 'string'.
```

但是还是生成了 js 文件：

```
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = [0, 1, 2];
console.log(sayHello(user));
```

**TypeScript 编译的时候即使报错了，还是会生成编译结果**，我们仍然可以使用这个编译之后的文件。

如果要在报错的时候终止 `js` 文件的生成，可以在 `tsconfig.json` 中配置 `noEmitOnError` 即可。关于 `tsconfig.json`，请参阅[官方手册（中文版）](https://zhongsp.gitbooks.io/typescript-handbook/content/doc/handbook/tsconfig.json.html)。

## 基础类型

### 原始数据类型

#### 布尔值

布尔值是最基础的数据类型，在 `TypeScript` 中，使用 `boolean` 定义布尔值类型

```
//布尔值
let boolean = true;
let isflag:boolean = true
let isdone:boolean = false

//编译通过
var boolean = true;
var isflag = true;
var isdone = false;
```

注意，使用构造函数 `Boolean` 创造的对象不是布尔值：

```
let createdByNewBoolean: boolean = new Boolean(1);

// index.ts(1,5): error TS2322: Type 'Boolean' is not assignable to type 'boolean'.
// 后面约定，注释中标出了编译报错的代码片段，表示编译未通过
```

事实上 `new Boolean()` 返回的是一个 `Boolean` **对象**：

```
let createdByNewBoolean: Boolean = new Boolean(1);
```

直接调用 `Boolean` 也可以返回一个 `boolean` 类型：

```
let createdByBoolean: boolean = Boolean(1);
```

在 `TypeScript` `中，boolean` 是 `JavaScript` 中的基本类型，而 `Boolean` 是 `JavaScript` 中的构造函数。其他基本类型（除了 `null` 和 `undefined`）一样，不再赘述。

#### 数值

使用 number 定义数值类型：

```
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
// ES6 中的二进制表示法
let binaryLiteral: number = 0b1010;
// ES6 中的八进制表示法
let octalLiteral: number = 0o744;
let notANumber: number = NaN;
let infinityNumber: number = Infinity;

//编译结果
var decLiteral = 6;
var hexLiteral = 0xf00d;
// ES6 中的二进制表示法
var binaryLiteral = 10;
// ES6 中的八进制表示法
var octalLiteral = 484;
var notANumber = NaN;
var infinityNumber = Infinity;
```

其中 0b1010 和 0o744 是 ES6 中的二进制和八进制表示法，它们会被编译为十进制数字。

#### 字符串

使用 `string` 定义字符串类型(可以使用双引号（`"`）或单引号（`）表示字符串)：

```
let name: string = "bob";
name = "smith";
```

你还可以使用模版字符串，它可以定义多行文本和内嵌表达式。 这种字符串是被反引号包围（`），并且以${ expr }这种形式嵌入表达式

```
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.

I'll be ${ age + 1 } years old next month.`;

```

这与下面定义`sentence`的方式效果相同：

```
let sentence: string = "Hello, my name is " + name + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";
```

### 数组

`TypeScript`像`JavaScript`一样可以操作数组元素。 有两种方式可以定义数组。 第一种，可以在元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```
let list: number[] = [1, 2, 3];
let arr1: string[] = [undefined, '2'];
```

第二种方式是使用数组泛型，Array<元素类型>：

```
let list: Array<number> = [1, 2, 3];
```

### 枚举

`enum`类型是对JavaScript标准数据类型的一个补充。 像C#等其它语言一样，使用枚举类型可以为一组数值赋予友好的名字。

```
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

console.log(Color)

编译结果

var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;

console.log(Color);  //{ '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(c);  //1

```

默认情况下，**从0开始为元素编号**。 你也可以手动的指定成员的数值。 例如，我们将上面的例子改成从 1开始编号：

```
enum Color {Red = 1, Green, Blue}
let c: Color = Color.Green;

console.log(Color);  //{ '1': 'Red', '2': 'Green', '3': 'Blue', Red: 1, Green: 2, Blue: 3 }
```

或者，全部都采用手动赋值：

```
enum Color {Red = 1, Green = 2, Blue = 4}
let c: Color = Color.Green;

{ '1': 'Red', '2': 'Green', '4': 'Blue', Red: 1, Green: 2, Blue: 4 }
```

枚举类型提供的一个便利是你可以由枚举的值得到它的名字。 例如，我们知道数值为2，但是不确定它映射到Color里的哪个名字，我们可以查找相应的名字：
```
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName);  // 显示'Green'因为上面代码里它的值是2
```

### 任意值Any

有时候，我们会想要为那些在编程阶段还不清楚类型的变量指定一个类型。 这些值可能来自于动态的内容，比如来自用户输入或第三方代码库。 这种情况下，我们不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查。 那么我们可以使用 any类型来标记这些变量：

```
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，any类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 Object有相似的作用，就像它在其它语言中那样。 但是 Object类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

```
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

当你只知道一部分数据的类型时，any类型也是有用的。 比如，你有一个数组，它包含了不同的类型的数据：

```
let list: any[] = [1, true, "free"];

list[1] = 100;
```

变量如果在声明的时候，未指定其类型，那么它会被识别为任意值类型：

```
let something;
something = 'seven';
something = 7;

something.setName('Tom');

等价于
let something: any;
something = 'seven';
something = 7;

something.setName('Tom');
```

### Void

使用 `:void` 来表示一个函数没有一个返回值

```
function warnUser(): void {
    console.log("This is my warning message");
}
```

声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：

```
let unusable: void = undefined;
```

### Null 和 Undefined

TypeScript里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大：

```
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

默认情况下`null`和`undefined`是**所有类型的子类型**。 就是说你可以把 `null`和`undefined`赋值给`number`类型的变量。
```
let v:number = undefined;
let v:number = null;
```

### Never

`never`类型表示的是那些永不存在的值的类型。 例如， `never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 `never`类型，当它们被永不为真的类型保护所约束时。

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是`never`的子类型或可以赋值给`never`类型（除了never本身之外）。 即使 `any`也不可以赋值给`never`。

下面是一些返回never类型的函数：

```
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
```

### Object

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的`API`。例如：

```
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```