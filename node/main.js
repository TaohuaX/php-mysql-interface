// 调用hello模块
// const Hello = require('./hello');
// const hello = new Hello();
// hello.setName('张三');
// hello.say();
const start = require('./http');
const router = require('./router');
start(router);
