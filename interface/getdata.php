<?php
    header("Content-type: text/html; charset=utf-8");
    $con = mysqli_connect('localhost', 'root', '');
    mysqli_select_db($con, 'newstest');
    mysqli_set_charset($con, 'utf-8');
    $sql = "SELECT * FROM newslist";
    $result = mysqli_query($con, $sql);
    $arr = array();
    if ($result) {
        while($row = mysqli_fetch_array($result)) {
            array_push($arr, array('newsname' => $row['name'], 'newscontent' => $row['content'], 'newsdesc' => $row['newsdesc'], 'id' => $row['id']));
        }
        echo json_encode(array('msg' => '获取成功', 'errcode' => '1', 'data' => $arr));
    } else {
        printf("Error: %s\n", mysqli_error($con));
        exit();
        echo json_encode(array('msg' => '获取失败', 'errcode' => '0', 'data' => array()));
    }
    mysqli_close($con);
?>