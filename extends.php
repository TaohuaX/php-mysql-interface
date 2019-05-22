<?php
    class Person {
        public $name;
        private $age;
        protected $money;
        function __construct($name, $age, $money){
            $this->name = $name;
            $this->age = $age;
            $this->money = $money; 
        }
        public function userInfo () {
            echo "名字===".$this->name.'<br/>';
            echo "年龄===".$this->age.'<br/>';
            echo "钱===".$this->money.'<br/>';
        }
    }
    class Person1 extends Person {
        function __construct($name, $age, $money){
            parent::__construct($name, $age, $money);
        }
        public function test () {  
            echo $this->money;
        }
    }
    $user = new Person1('张三', '20', '99999');
    echo $user->test();
?>