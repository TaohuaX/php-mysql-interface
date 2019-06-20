const events = require('events');
class MyEvents extends events {
        constructor (opt) {
                super(opt)
        }
        init ()  {
                console.log('init...')
                this.emit('init', '我是初始化参数')
        }
        close () {
                console.log('关闭')
                this.emit('close')
        }
}
let myTest = new MyEvents();
myTest.on('init', function (as) {
        console.log(as + 'ssssssssss')
});
myTest.on('close', function () {
        console.log('关闭了')
});

myTest.init();
myTest.close();

