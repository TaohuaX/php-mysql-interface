<?php
    $dbms = 'mysql'; // 数据库类型
    $host = 'localhost'; // 数据库主机名
    $dbName = 'newstest'; // 使用的数据库
    $user = 'root'; // 数据库连接的用户名
    $pass = ''; // 数据库连接的密码
    $charset = 'utf8'; // 解决乱码
    $dsn = "$dbms:host=$host; dbname=$dbName; charset=$charset";
    try {
        $dbh = new PDO($dsn, $user, $pass); // 初始化一个PDO对象
        // echo "连接成功<br/>";
        // $sql = "DELETE FROM `newslist` WHERE `id`=14";
        // $sql = "UPDATE `newslist` SET `name`='李四', `content`='夫飞机覅',`newsdesc`='3333' WHERE `id`=15";
        $sql = "INSERT INTO `newslist`(`name`,`content`,`newsdesc`) VALUES('张三sssss', '我年龄100', '真的')";
        // $sql = "SELECT * FROM `newslist`";
        $result = $dbh->exec($sql);
        //  foreach($dbh->query($sql) as $row){
        //     echo '<pre>';
        //     print_r($row);
        // }
        $resultd = $dbh->lastInsertId();
        echo $resultd;
        $dbh = null;
    } catch (PDOException $e) {
        die("Error:" .$e->getMessage()."<br/>");
    }
?>