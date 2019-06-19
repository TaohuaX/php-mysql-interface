// 调用hello模块
const Hello = require('./hello');
const hello = new Hello();
hello.setName('张三');
hello.say();