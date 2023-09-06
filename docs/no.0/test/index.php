<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>phpTest</title>
</head>
<body>
    <?php
    $GLOBALS['b'] = '生命全局变量b'
    if(true){
        echo '默认输出index.php，必须有结束分号';
    }
    ?>
</body>
</html>