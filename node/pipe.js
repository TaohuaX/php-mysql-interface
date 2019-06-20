const fs = require('fs');
const path = require('path');
let str = path.join(__dirname, 'fswrite.js');
let str1 = path.join(__dirname, 'fswritecopy.js');
let rs = fs.createReadStream(str);
let ws = fs.createWriteStream(str1);
rs.pipe(ws);