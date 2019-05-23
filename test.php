<?php
    header("Content-type: application/json; charset=utf-8");
    $dbms = 'mysql';
    $host = 'localhost';
    $dbName = 't_student';
    $username = 'root';
    $pass = '';
    $charset = 'utf8';
    $dsn = "$dbms:host=$host;dbname=$dbName;charset=$charset";
    $arr = array();
    try{
        $dsh = new PDO($dsn, $username, $pass);
        $sql = "SELECT student.id,student.name,class.class_name FROM student,class WHERE student.class_id = class.class_id";
        foreach($dsh->query($sql) as $row){
            array_push($arr,array('id'=>$row['id'],'name'=>$row['name'],'className'=>$row['class_name']));
        }
        exit(json_encode(array('msg'=>'成功','errcode'=>'1','data'=>$arr),JSON_UNESCAPED_UNICODE));
    } catch (PDOException $e) {
        die('error:'.$e->getMessage());
    }
?>