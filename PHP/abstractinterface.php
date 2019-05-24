<?php
// 抽象类
    abstract class Person{
        public abstract function eat ();
    }
    class Person1 extends Person{
        public function eat () {
            echo '就是吃';
        }
    }
    $user = new Person1();
    $user->eat();

// 接口
    interface Person2{
        const NAME = "小明";
        public function run ();
        public function work ();
    }
    interface Person3{ 
        public function study ();
    }
    class Person4 implements Person2,Person3{
        const age = 9999;
        public function run () {
            echo '跑';
        }
        public function work () {
            echo '吃';
        }
        public function study () {
            echo '学习';
        }
        public function test () {
            echo self::age;
        }
        public static function testa () {
            echo self::age;
        }
    }
    $myface = new Person4();
    $myface->run();
    echo $myface::NAME;
    // 方法1
    $myface->test();
    // 方法2
    echo Person4::age;
    // 方法3    方法不用new 之后在调用  需加上static
    Person4::testa();
?>