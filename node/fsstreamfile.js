const fs = require('fs');
const path = require('path');
let str = path.join(__dirname, 'fswrite.js');
let str1 = path.join(__dirname, 'fswritecopy.js');
let rs = fs.createReadStream(str);
let ws = fs.createWriteStream(str1);
rs.on('data', (fd) => {
        if (!ws.write(fd)){
                rs.pause();
        } 
})
rs.on('end', () => {
       ws.end();
       console.log('复制成功');
})
ws.on('drain', () => {
        rs.resume();
 })