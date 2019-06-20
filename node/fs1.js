const fs = require('fs');
// 方式一
// 启动监听文件夹
// let watch = fs.watch(__dirname);
// 监听改变的事件
// watch.on('change', (eventType, fileName) => {
//         console.log(eventType)
//         console.log(fileName)
// });
// 方式二
let watch = fs.watch(__dirname, (eventType, fileName) => {
        console.log(eventType)
        console.log(fileName)
        console.log(1)
})
// 关闭监听
setTimeout(() => {
        watch.close()
},  10000)