<?php
    $con = mysqli_connect('localhost', 'root', '');
    mysqli_set_charset($con, 'utf-8');
    mysqli_select_db($con, 'newstest');
    $newsname = $_REQUEST['newsname'];
    $newscontent = $_REQUEST['newscontent'];
    $newsdesc = $_REQUEST['newsdesc'];
    $newsid = $_REQUEST['id'];
    // var_dump($newsname);
    // die;
    if ($newsid) {
        $sql = "UPDATE `newslist` SET `name` = '".$newsname."', `content` = '".$newscontent."', `newsdesc` = '".$newsdesc."' WHERE `id`='".$newsid."'";
        $result = mysqli_query($con, $sql);
        if ($result) {
            echo json_encode(array('msg' => '修改成功', 'errcode' => '1'));
        } else {
            echo json_encode(array('msg' => '修改失败', 'errcode' => '0'));
        }
    } else {
        $sql = "INSERT INTO `newslist`(`name`, `content`, `newsdesc`) VALUES ('".$newsname."', '".$newscontent."', '".$newsdesc."')";
        $result = mysqli_query($con, $sql);
        if ($result) {
            echo json_encode(array('msg' => '增加成功', 'errcode' => '1'));
        } else {
            echo json_encode(array('msg' => '增加失败', 'errcode' => '0'));
        }
    }
    mysqli_close($con);
?>