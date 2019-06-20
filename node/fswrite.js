const fs = require('fs');
const path = require('path');
let str = path.join(__dirname, 'fswritecopy.js') ;
fs.writeFile(str, '我是写入的\n三', (err) => {
        err?console.log(err):console.log('正常写入');
})