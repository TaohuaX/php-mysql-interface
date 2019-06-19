const events = require('events');
const eventEmitter = new events.EventEmitter();
// 绑定事件处理函数
const connectHandler = () => {
        console.log('事件处理')
};
// 绑定事件
eventEmitter.on('connection', connectHandler);
// 触发事件
eventEmitter.emit('connection');