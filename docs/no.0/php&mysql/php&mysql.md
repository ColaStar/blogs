# MySQL & PHP
---
#### 安装开发集成环境
XAMPP就是X-系统，A-Apache，M-Mysql，P-php，P-Phpmyadmin/Perl的缩写
#### 初识PHP
- 1.PHP 脚本以 <?php 开始，以 ?> 结束;
- 2.PHP 文件的默认文件扩展名是 ".php"。
- 3.有两种在浏览器输出文本的基础指令：echo 和 print;
- 4.PHP 中的每个代码行都必须以分号结束。分号是一种分隔符，用于把指令集区分开来;
- 5.PHP注释可以通过//和/***/
- 6.声明变量以 $ 符号开始，后面跟着变量的名称,
- 7.作用域:在所有函数外部定义的变量，拥有全局作用域。除了函数外，全局变量可以被脚本中的任何部分访问，要在一个函数中访问一个全局变量，需要使用 global 关键字。    
在 PHP 函数内部声明的变量是局部变量，仅能在函数内部访问;
Static 作用域:当一个函数完成时，它的所有变量通常都会被删除。然而，有时候您希望某个局部变量不要被删除。

```
<?php
 if (false) {
	  $a = "测试";
	}
	echo $a; // 这里直接报错，因为php是块级作用域。javascript是函数级作用域，所有变量提升。
	
	// php 中有一个函数是 isset, 用于判断变量是否声明
	if (isset($a)) {
	  echo "我是一个声明的";
	} else {
	  echo "我没有声明";
	}
?>
```

```
$a = "我是外面的";
  function test() {
    echo $a;
  }
  
  test(); // 报错，函数里面的拿不到外面的变量
  
  // 如果要拿到外边的变量，必须要这样写
  function test() {
    global $a; //global 关键字用于函数内访问全局变量
    echo $a
  }
  test();
```

```
  <?php
  $GLOBALS['index'] = something 
  ?>
  //PHP 将所有全局变量存储在一个名为 $GLOBALS[index] 的数组中。 index 保存变量的名称。这个数组可以在函数内部访问，也可以直接用来更新全局变量。
```

- 7.如何引入其他脚本的文件

```
- include
- require

require_once('./index.php');

include_once('./index.php') 
不管有没有错,include_once都要执行
```
- 8.array() 函数用于创建数组：
```
//数值数组
$cars=array("Volvo","BMW","Toyota");

//关联数组
$age=array("Peter"=>"35","Ben"=>"37","Joe"=>"43");
```
- 9.json_encode与json_decode()
json_encode对变量进行JSON编码
json_decode() 对JSON数据进行解码，转换为PHP变量
- 10.session
session 变量用于存储关于用户会话（session）的信息，或者更改用户会话（session）的设置。Session 变量存储单一用户的信息，并且对于应用程序中的所有页面都是可用的

存储到session中，必须启动会话session_start() 函数必须位于 < html > 标签之前：
```
<?php
//启动会话
session_start();
// 存储 session 数据
$_SESSION['views']=1;
if(isset($_SESSION['views']))//isset() 函数检测是否已设置 "views" 变量
{
    unset($_SESSION['views']);//unset() 函数用于释放指定的 session 变量：
}
//销毁session
session_destroy();
 ?>
```
- 11.$_GET、$_POST、$_REQUEST
> $_GET 变量用于收集来自 method="GET" 的表单中的值。
> $_POST 变量用于收集来自 method="post" 的表单中的值。
> $_REQUEST 变量包含了 $_GET、$_POST 和 $_COOKIE 的内容。  $_REQUEST 变量可用来收集通过 GET 和 POST 方法发送的表单数据。值。


#### PHP中的Mysql
- 连接Mysql
```
//面向对象
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";
?>

//实例 (MySQLi - 面向过程)
<?php
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = mysqli_connect($servername, $username, $password, $dbname);
// 检测连接
 
// 检测连接
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "连接成功";
?>
```
//实例 (MySQLi - 面向过程)

- 关闭连接
```
mysqli_close($conn);
```
- 创建库与数据表
我自己一般是在PHPAdmin里边配置  
1.创建数据库需要设置库名，与字符类型（一般是utf8_general_ci）  
创建数据表的时：
1.表名，字段数
2.主键PK，NN非空，设置自增AI，字符类型设置VARCHAR，数字类型设置INT，文本类型（内容较多）设置TEXT，时间设置DATE
当然了设置数据类型是根据业务而设置，一般就是字符，数字，文本，时间等
- 插入数据
```
INSERT INTO table_name (column1, column2, column3,...)
VALUES (value1, value2, value3,...)


//例
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com')";
 
if (mysqli_query($conn, $sql)) {
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}
 
```
**插入多条数据**
```
$sql = "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('John', 'Doe', 'john@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Mary', 'Moe', 'mary@example.com');";
$sql .= "INSERT INTO MyGuests (firstname, lastname, email)
VALUES ('Julie', 'Dooley', 'julie@example.com')";
 
if ($conn->multi_query($sql) === TRUE) {  //mysqli_multi_query($conn, $sql)
    echo "新记录插入成功";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
```
- 删除数据库中的数据 
```
mysqli_query($con,"DELETE FROM Persons WHERE LastName='Griffin'");
```
- 修改数据库表中的数据
```
mysqli_query($con,"UPDATE Persons SET Age=36
WHERE FirstName='Peter' AND LastName='Griffin'");
```
- 查询数据库中数据
```
select * from ydbiao where id =1
```
#### PHP与PDO
- **简介**：PHP 数据对象 （PDO） 扩展为PHP访问数据库定义了一个轻量级的一致接口。
PDO 提供了一个数据访问抽象层，这意味着，不管使用哪种数据库，都可以用相同的函数（方法）来查询和获取数据。
- **使用PDO连接MySql数据库的实例**
```
<?php
$dbms='mysql';     //数据库类型
$host='localhost'; //数据库主机名
$dbName='test';    //使用的数据库
$user='root';      //数据库连接用户名
$pass='';          //对应的密码
$dsn="$dbms:host=$host;dbname=$dbName";


try {
    $dbh = new PDO($dsn, $user, $pass); //初始化一个PDO对象
    echo "连接成功<br/>";
    /*你还可以进行一次搜索操作
    foreach ($dbh->query('SELECT * from FOO') as $row) {
        print_r($row); //你可以用 echo($GLOBAL); 来看到这些值
    }
    */
    $dbh = null;
} catch (PDOException $e) {
    die ("Error!: " . $e->getMessage() . "<br/>");
}
//默认这个不是长连接，如果需要数据库长连接，需要最后加一个参数：array(PDO::ATTR_PERSISTENT => true) 变成这样：
$db = new PDO($dsn, $user, $pass, array(PDO::ATTR_PERSISTENT => true));

?>
```
#### PHP与Mysql实战
```
a.php请求b.php
<from action="./b.php">
<div class="case">
   <label for="username">用户名<label>
   <input type="text" name="username" class="username"/>
</div>
<div class="case">
   <label for="password">密码<label>
   <input type="text" name="password" class="password"/>
</div>
   <input type="submit" name="password" value="登陆"/>
</from>
<script>
const username = $('.username').val()
const password = $('.password').val()
$.ajax({
  url:'./php',
  type:'post',
  data:{
    username:username,
    password:password
  }，
  success:function(data){
    alert(data)
  }
})
</script>

//b.php

<?php
$usernames = $_REQUEST['username'];
$passwords = $_REQUEST['password'];

$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "myDB"; //库名
 
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);
 
// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
} 
echo "连接成功";

$sql = "SELECT * FROM yd-test WHERE username = $usernames";
$result = $conn->query($sql);
 
if ($result->num_rows > 0) {
    // 输出数据
    while($row = $result->fetch_assoc()) {
        echo "id: " . $row["id"]. " - Name: " . $row["firstname"]. " " . $row["lastname"]. "<br>";
    }
} else {
    echo "0 结果";
}
$conn->close();
?>

```

#### 面向对象的介绍
> 面向对象的产生
**软件危机->软件工程学->面向对象**
软件生产方式无法满足迅速增长的计算机软件需求->软件工程学->结构化方法（按软件周期分为三个阶段分析/设计/编程）与面向对象


> 面向对象的概念
OOP（面向对象的编程）技术，使其编程的代码更简洁、更易于维护、并且具有更强的可重用性。
OOP达到了软件工程学的三个目标：重用性、灵活性、扩展性
OOP面向对象编程都的特点：封装，继承，多态。

> 类与面向对象的关系
什么是类？
什么是对象？
别的语言必须new出来的
> 想想对象的程序设计
面向对象的三个主要特性：
- 对象的行为
- 对象的状态
- 对象的标识
> 如何抽象一个类
- 类的声明
```
//简单格式

[修饰符] class 类名 {//使用class关键字加空格后加类名
  [成员属性]//也叫成员变量
  [成员方法]  //也叫成员函数
}

//完整格式：

[修饰符] class 类名 [extends父类][implements 接口1，[接口2...]] {//使用class关键字加空格后加类名
  [成员属性]//也叫成员变量
  [成员方法]  //也叫成员函数
}
```
- 成员属性 
具体的一个值
```
格式：修饰符$变量名[=默认值]//如:public $name = "zhangsan"
注意成员属性不可以是带运算符的表达式、变量、方法或者函数调用

public $var1 = 1+1;错误格式
public $var2 = self:myStaticMethod();错误格式
public $var3 = $myVar;错误格式

正确的定义格式：
public $var1 = 2;//普通数值（4个标量：整数，浮点数，布尔，字符串）
public $var2 = myConstant;//常量
public $var3 = self:myStaticMethod;//静态属性
public $var4 = array(trye,false);//数组

```
- 成员方法
成员的方法格式：
```
[修饰符] function 方法名(参数...){
[方法体]
[return 返回值]
}


public function eat(){  //我在吃饭的方法
    echo "我在吃饭"  //方法体
}
```
> 通过类实例化对象
- 实例化对象
当定义好类,我们使用new关键字来生成一个对象,类的第一个字母大写。成员属性方法用驼峰
```
$对象名称 = new类的名称();
$对象名称 = new类的名称([参数列表])//在实例化对象上传递参数，在类的内部是可以接收到的
```
- 对象中成员的访问
$引用名 = new类的名称(构造参数);
$引用名 -> 成员属性 = 赋值;//对象属性赋值
echo $引用名 -> 成员属性；//输出对象的属性
$引用名 -> 成员方法； //调用对象的方法

- 特殊对象引用this
```
特殊对象的引用$this
class Person{
  public $age;
  public function say($word){
    echo "she say {$word}";
  }
  public function info(){
    $this->say('Hi');
    return $this -> age
  }
}
$xiaowang = new Person();
$xiaowang -> age = 26;
$age = $xiaowang->info();
echo "<br/>"
echo $age;
```

#### 构造方法与析构析构方法
- 构造方法
//当这个类new的时候被自动执行的
```
构造方法语法格式
[修饰符]function __construct(参数){

}
```
- 析构方法
//当对应类不会再使用相关的方法和属性的时候，被调用
```
[修饰符]function __destruct(参数){
[代码体]
}
```
- 构造方法与析构方法的实例
```
class App{
  public function __construct($name,$age){
//当这个类new的时候被自动执行的
$this ->name =$name
$this ->age =$age
  }
  public function data(){
    return $this->age
  }
  public function __destruct(){
    //用途 可以进行资源的释放操作 数据库关闭
    //对象被销毁的时候被执行，没有代码被运行了
    echo "bye bye{$this->name}"
  }
}
$xiaowang = new App('first',20)
echo $xiaowang ->data();
```
#### 面向对象的封装性
> 设置私有成员与私有成员的访问

- 封装的修饰符

封装是面向对象编程中的三大特性之一，封装就是把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象的内部细节，已达到对成员的访问控制（切记不是拒绝访问)。

**PHP5支持如下3种访问修饰符**
```
public    (公有的 默认)
private    (私有的)
protected    (受保护的)
```
- 设置私有成员
只要在声明成员属性或方法时，使用private关键词修饰就是实现了对成员的私有封装。
```
class Penson{
  private $name;
  private $age;
  private function say(){
    //...
  }
}
```
- 访问私有成员
封装后的成员在对象外部不能直接访问，只能在对象内部方法中使用$this访问
```
class Penson{
  private $name;
  public function say(){
    return $this->name
  }
}
```
- 魔术方法__set()
当外边类里的属性设置的时候被调用
- 魔术方法__get()
- 魔术方法__isset()
- 魔术方法__unset()
- 类的访问权限
||private|protexted|public默认的|
|:--:|:--:|:--:|:--:|
|在同一类|可以|可以|可以|
|在类的外部|不可以|不可以|可以|
```
class Penson{
  piblic $name ='张三、';//公有的
  private $age = 27;//私有的
  protected $money= 90;//受保护的的
  
  //私有的成员方法  不能在类的外部直接访问
  private function getAge(){
return $this -> age;
  }
  //被保护的成员方法  不能在类的外部直接访问
  protected function getMoney(){
return $this -> money;
    
  }
  public function userCard(){
echo $this->getName() . $thi -> getMoney();
  }
  public function __set($name,$value){
    //魔术方法的set，只针对保护的和私有的
    if($key == 'name' && $value === 'laowang'){
       $this ->name = 'xiaowang';
    }
  }
  public function __get($key){
if($key =='age'){
  return '唉呀妈呀';
}
  }
  public function __isset($key){
     if($key == 'age'){
       return 'true';
     }
  }
  public function __unset($key){
     if($key == 'name'){
       return;
     }
  }
}
$xiaowang = new Penson();
//echo $xiaowang->name; //张三
//echo $xiaowang->age; //私有的
//echo $xiaowang->money ;//被保护的
//echo $xiaowang->userCard();张三90

$xiaowang->name  = '老王';//张三
echo $xiaowang->userCard()xiaowang90;
echo $xiaowang->age;
echo isset($xiaowang->age)//判断类里边有没有这个成员属性，返回布尔值，当私有或者首保护的时候返回false;
echo unset(xiaowang->name)//把成员属性干掉

```
#### 类的继承与多态
> 类继承的应用
php只支撑单继承，不允许多重继承。一个子类只能有一个父类，不允许一个类直接继承多个类，但是一个类可以被多个类继承。  
可以有多层继承，即一个类可以继承某个类的子类，如类B继承了A，类C继承了类B，类C就继承了类A   
翻译一下就是一个可以有多个儿子但是只能有一个父亲。
```
class A{
   
}
class B extends A{
  
}
```
> 访问类型的控制
||private|protected|public|
|:--:|:--:|:--:|:--:|
|在同一类|可以|可以|可以|
|在子类|不可以|可以|可以|
|在类的外部|不可以|不可以|可以|

> 子类中重载父类的方法

多态就是多种状态
重载：你的方法还叫A，但是参数与父类不一样onload
重写：就是你的方法还叫 A，把父类的方法覆盖了onread
- 在子类里面允许重写（覆盖）父类中的方法
- 在子类中 使用parent访问父类中被覆盖的属性与方法

- 调用
parent::construct()
parent::fun()

```
class Penson{
     public $name;
     private $age;
     protected $money();
     function __construct(){
       $this -> name = $name;
       $this -> age = $age;
       $this -> money = $money;
     }
     public function cardInfo(){
       echo $this->name.$this.age.$this.money''
     }
}

class Yellow extends Penson{
     functiion __construct($name,$age,$money){
         parent::__construct($name,$age,$money)//重载
     }
     //php重写
       public function cardInfo($pp){
         parent::cardInfo()//php重载方法
         echo $pp
     }
     public function test(){
       echo $this->money
     }
}
$s =new Yellow('xiaowang',30,20)
$s->cardInfo()
$s->name //共有可以继承
$s->age //私有可以继承
$s->money //受保护的可以继承但是外部不能访问
$this->test()受保护的就可以调用了
```
#### PHP面向对象程序设计之抽象类与接口
>抽象方法与抽象类
当类中有一个方法，他没有方法体，也就是没有花括号，直接分号结束，象这种方法我们叫抽象方法，必须使用关键字abstract定义。
如：
```
public abstract function();
```
包含这种方法的类必须是抽象类也要使用关键字也要使用关键字abstract加以声明。（即使用关键字abstract修饰的类为抽象类）
**抽象类的特点：**  
- 不能实例化，也就是不能new成一个对象，
- 若想使用抽象类，就必须定义一个类去继承这个抽象类，并定义覆盖父类的抽象方法（实现抽象方法）
>接口技术
PHP与大多数面向对象编程语言一样，不支持多重继承，也就是说每个类只能继承一个父类，为了解决这个问题，PHP引入了接口，接口的思想是指定了一个实现了该接口的类必须实现的一系列函数。
**定义格式**
```
interface 接口名称{
  //常量成员（使用const关键字定义）
  //抽象方法（不需要使用abstract关键字）
}
```
**使用格式**
```
class 类名 implements 接口名1，接口名2{... ...}
```
**抽象类与接口的区别**
当你关注事物的本质时候，用抽象类；当关注一个操作的时候，用接口

接口是对动作的抽象，表示这个对象能做什么，对类的局部行为进行抽象。  
抽象类是对根源的抽象，表示这个类是什么，对类的整体进行抽象，对一类事物的抽象描述。  

比如，男人，女人，这俩个类（如果是类的话），他们抽象类诗人。说明，他们都是人，人可以吃东西，狗也可以吃东西，你可以把'吃东西'定义成一个接口，然后让这些类去实现它。

所以，在高级语言上，一个类只能继承一个类（抽象类）（正如人不可能同事是生物和非生物）但是可以实现多个接口（吃饭接口，走路接口等）

- 接口是抽象类的变体，接口中所有的方法都是抽象的，儿抽象类是声明方法而不去实现它的类。
- 接口可以多继承，抽象类不行。
接口定义方法，不能实现，而抽象类可以实现部分方法。
- 接口中基本数据类型为static而抽象类不是。
- 接口中不能含有静态代码块以及静态方法，而抽象类可以含有静态方法和静态代码块


>多态应用
对象的多态性：是指父类中定义的属性或行为被子类继承后，可以具有不同的数据类型或不同的行为。这使得同一个属性和方法在父类及其各个子类中具有不同的语义。

```
<?php
/**
*1.含有抽象方法的类必须是抽象类
*2.抽象类不一定非得含有抽象方法
*3.抽象类可以有存在普通的方法
*4.抽象类不能被实例化,必须由一个子类继承，并且把抽象类得抽象方法都实现了。
*5.
*
*/
abstract class Penson{
    public abstract function eat(){
      echo 'eat';
    }
    //抽象方法 没有方法体
    public abstract function tell()
}
class Man extends Person{
      public function eat(){};//抽象类中的方法必须实现了
      public function tell(){
        echo 'Man tell'
      }
}
$man = new Man();
?>
```
```
//接口
/*
*1.接口声明得关键字是interface
*2.接口还可以声明常量，也可以抽象方法，不能声明变量
*3.接口中的方法都是抽象方法，不用abstract去人肉定义
*4.接口不能被实例化 需要一个类去实现它
*/5.一个类不能继承多个类 一个类可以实现多个接口
<?php
interface Penson{
  const NAME = 'lvjian';
  pubilc function eat();
  public function run();
}
interface Study{
  public function study();
}
class Student implements Penson,Study{
    public function run(){
      echo 'run';
    }
    public function eat(){
      echo 'eat';
    }
    public function study(){
      echo 'study';
    }
     public static function test(){
      echo self::data;
    }
}
$lj = new Student;
$lj->eat();
//常量使用
echo $lj::NAME;
echo Student::data;
$lj->test();

?>
```
#### PHP中常见的关键字
- final关键字
只能用来修饰类和方法，不能使用final这个关键字来修饰成员属性  
final特性：
1)使用final关键字标识的类不能被覆盖
2)使用final关键字表示的方法不能被子类覆盖（重写），是最终版本  
目的  
1)是为了安全  
2)是没必要被继承重写

- static关键字
表示静态的意思，用于修饰类的成员属性和成员方法（即静态属性和静态方法）。

类中的静态属性和方法不用实例化(new) 就可以直接使用类名访问。

格式：  
类：：$静态属性        类：：静态方法
在类的方法中。不能this来引用变量或静方法，而需要用self来引用。  
格式：
self：：$静态属性       self：：$静态方法  
静态方法中不可以使用非静态的内容。就是不让使用$this.  
静态属性是共享的，也就是new很多对象也是共用一个属性。


- 单例设计模式
单类模式主要的作用是保证在面向对象的编程设计中，一个类只能有一个实例对象存在。

- const关键字
const是一个在类中定义敞亮的关键字，我们都知道在PHP中定义常量使用的"define"这个函数，但是在类里面顶i有常量使用的是"const"这个关键字  
语法：  
const CONSTANT = 'conat value';//定义
echo self::CONSTANT;//在类的内部访问
echo 类名::CONSTANT;//在类的外部访问
- instanceof关键字
关键字用于检测当前对象是不是属于某个类或者这个类的子类。
- 魔术方法
克隆，类中通用的方法，自动加载类
常用函数
class_exists检测类是否存在  
get_class_methods拿到类里边的方法  名组成的数组
get_class拿到类返回对象的类名
get_object_vars返回对象属性组成的数组
get_parent_class返回对象或类的父类名
is_a如果对象属于该类或该类是此对象的父类则返回true
methods_exists检测类的方法是否存在
property_exists检测对象或类是否具有该属性
#### PHP错误处理类
- 系统自带的异常处理
php返回的错误信息比js的全面好多
- 自定义异常处理
通过继承Exception类添加新的信息
js叫Error。
- 捕捉多个异常处理
if else多个catch去处理异常

#### PHP与js的比较
js中不存在class用function

```
本身就是一个函数
当new的时候就会被主动执行
function Car(color){
  this.color = color
  console.log(1111)
}
Car.prototypr.run = function(){
  console.log(this.color)
}
var Son = function(color){
  Car.call(this,color)
}
var _prototype = Object.create(Car.prototype)//父类的原型
_prototype.constructor = Son;
Son.prototype = _prototype
son.prototype.gogo = function(){
  console.log(111)
}

var a = new Son('red');
var b = new Car('red');
console.log(a)
console.log(b)

prototype是原型
构造函数在原型上，
js放的方法定义在prototype上，是因为共享

```

PHP与mysql开发入门（下）
----------------------------------------------------
#### Mysql数据库客户端基础

mysql-数据库客户端界面mysql---workbench
www.mysql.com/downloads
- 创建数据库的语句
create schema 库名 default chracter set utf8
- 切换默认数据库
1)点右键第一项 set default schema
2)use 库名//命令行
- 如何用命令行操作数据库
```
先登陆数据库
mysql -u用户权限  -p(使用密码登陆)  
mysql -uroot -p  
提示输入密码  
登陆到mysql的管理环境中  
查看库列表  
show databases;  
会出现数据库私有库（一般不允许用户操作）与用户创建的库
进入到哪个数据库（即设置默认数据库）
use 库名;
命令需要加;分号（因为一些命令必须要有，系统会以为你没有输入完）

创建数据表
create table `库名`.`表名`(`id` INI NOT null AAUTO_INCREMENT COMMENT,`name` VARCHAR(40) NOT null COMMENT,`date` DATE NOT null COMMENT,`gender` CHAR(1) NOT null COMMENT,`PRIMARY` KEY(`id`) COMMENT '');

插入 insert into
删除 delete
修改 update
查询 select
```
数据库注释
```
-- max()
用--表示
```
复杂的sql语句
```
//所有的*
SELECT * FROM 库名.表明
//条件查询
配合函数的用法

//符合某一条件的总 count()
SELECT count(*),表明.* FROM 库名.表明 SHERE 字段="M";
//符合某一条件后里的最小值 min(某一字段) FROM 库名.表名
//求最大值max()
//求和sum()
//求平方根sqrt()
//求随机数的 rand()返回0-1的数字可以+、-、*、/
//第一个first()
//最后一个last()
//当前事件now()
//拼字符串的函数concat('132d','dsd')

//可以写自定义函数function选项
```
WHERE、BETWEEN、AND语句条件查询
```
大于、小于、等于、大于等于、小于等于符号
从某表中查询4<=id<10的数据
方法一：
SELECT * from 表名 WHERE ID>=4 AND ID<=10

方法二：
SELECT * from 表名 WHERE ID BETWEEN '4' AND '10'
BETWEEN与AND同时出现

//筛选姓王的学生
link %王%模糊查询   %号叫通配符，代表任意字符，%在哪对哪边模糊查询
'%六'  以六结尾
'%六%'  含有六
'六%'  //以什么开头
SELECT * from 表名 WHERE name link "王%"


```
mysql数据库不适合做大量数据的模糊查询，link不要滥用，查询速度慢，太占内存一般的搜索引擎不会用sql，

- 复杂语句
```
//按照某字段去排序order by(从小到大)
select * from 表名 order by 字段

//按照某字段去排序order by(从大到小)逆序排序
select * from 表名 order by 字段 desc

//按照某字段去排序order by(从小到大)asc正序排序（可以被省略）
select * from 表名 order by 字段 asc

//多表查询一些字段（where子句）
select 第一表名.字段名,第二表名.字段名  from 第一表名,第二表名 where 第一表名.字段名 = 第二表名.字段名

查询最需要的字段，节约计算机的资源，尽量不要*。

//多表查询一些字段（左连接LEFT JOIN）
select 第一表名.字段名,第二表名.字段名  from 第一表名 left join 第二表名 on 第一表名.字段名 = 第二表名.字段名 




```



