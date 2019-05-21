<?php
    $con = mysqli_connect('localhost', 'root', '');
    mysqli_select_db($con, 'newstest');
    mysqli_set_charset($con, 'utf-8');
    $newsid = $_REQUEST['id'];
    $sql = 'DELETE FROM `newslist` WHERE `id` = '.$newsid.'';
    $result = mysqli_query($con, $sql);
    if ($result) {
        echo json_encode(array('msg' => '删除成功', 'errcode' => '1'));
    } else {
        echo json_encode(array('msg' => '删除失败', 'errcode' => '0'));
    }
?>