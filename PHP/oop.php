<?php
// 类的声明
    class Person {
        public $age;
        public function say ($word) {
            echo "你好{$word}";
        }
        public function info () {
            $this->say('小明');
            return $this->age;
        }
    }
    $hee = new Person();
    $hee->age = 22;
    $age = $hee->info();
    echo $age."<br/>";



// 构造方法及析构方法
    class Person1{
        // 构造方法
        // 在new的时候自动执行
        public function __construct($age){
            $this->age = $age;
        }
        public function data(){
            return $this->age;
        }
        // 析构方法
        // 对象被销毁的时候执行   没有代码在运行的时候执行
        // 谁先执行谁先结束
        public function __destruct(){
            // 用途：可以进行资源的释放  数据库的关闭 读取文件的关闭
            echo '析构执行'.'<br/>';
        }
    }
    $hee1 = new Person1(30);
    echo $hee1->data()."<br/>";


    
// 封装
// public private protected的学习
    class Person2{
        public $x = 0;
        private $name = '张三';
        private $age = 20;
        protected $money = 99999999;
        // 私有的成员方法  不能在类的外部直接访问
        private function getAge () {
            return $this->age;
        }
        // 被保护的成员方法 不能在类的外部直接访问
        protected function getMOney () {
            return $this->money;
        }
        public function getUser () {
            echo '名字:'.$this->name.' 年龄：'.$this->getAge().' 金钱：'.$this->getMoney();
        }
// 魔术得相关方法
        // 魔术的方法的set 只针对private protected
        public function __set($key, $value) {
            if ($key === 'name' && $value === '李四') {
                echo '我是魔术方法的set<br/>';
            }
        }
        public function __get ($key) {
            if ($key === 'age') {
                return '我真的是魔术get';
            } 
        }
        public function __isset ($key) {
            if ($key === 'age') {
                return true;
            } 
        }
        public function __unset ($key) {
            if ($key === 'x') {
                return;
            } 
        }
    }
    $user = new Person2();
    // $user->name = '李四';
    // $user->getUser();
    // echo $user->age;
    // var_dump(isset($user->age)); // private protected起来的就是false
    echo $user->x;
    unset($user->x);
    echo $user->x;
?>