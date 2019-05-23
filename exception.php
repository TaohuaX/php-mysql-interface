<?php
    class myException extends Exception{
        public function getInfo () {
            return $this->getMessage();
        }
    }
    // 都用自定义的类来处理错误信息
    // try{
    //     if ($_GET['num']==1) {
    //         throw new myException('错了 我是1');
    //     } else if($_GET['num']==2) {
    //         throw new myException('对了 我是2');
    //     } else{
    //         echo 'success';
    //     }
    // }catch(myException $e){
    //     echo $e->getMessage();
    // }
    
     // 用不同的类来处理错误信息 就要有对应的catch
     try{
        if ($_GET['num']==3) {
            throw new myException('错了 我是1');
        } else if($_GET['num']==4) {
            throw new Exception('对了 我是2');
        } else{
            echo 'success';
        }
    }catch(myException $e){
        echo '第一个';
        echo $e->getMessage();
    }catch (Exception $e) {
        echo '第二个';
        echo $e->getMessage();
    }
?>