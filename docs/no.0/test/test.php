<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php
require_once('./index.php');
// include_once('./index.php')  不管有没有错我都要执行
    if(false){
        $a = 'php声明变量需要用$a';
        echo '默认输出index.php，必须有结束分号';
    }else if(){
     echo '$isset($a)判断变量是否声明';
    }else{
        global $a;
        echo '变成';
        echo '具有块级作用';
    }
echo $GLOBALS['b'];
        
    
    ?>
</body>
</html>