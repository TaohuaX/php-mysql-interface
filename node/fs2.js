const fs = require('fs');
const path = require('path');
let str = path.join(__dirname, 'event.js');
let filestream = fs.createReadStream(str);
filestream.setEncoding('UTF8');
filestream.on('open', (fd) => {
        console.log(fd);
})
filestream.on('data', (data) => {
        console.log(data);
})
filestream.on('end', () => {
        console.log('数据读取完毕');
})