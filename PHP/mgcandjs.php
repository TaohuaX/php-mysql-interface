<?php
    class TestClass{
        public $info;
        public function __construct($info){
            $this->info = $info;
        }
        public function __toString(){   // 此方法一定要有个返回值
            return $this->info;
        }
    }
    $test = new TestClass('hello');
    echo $test;
?>