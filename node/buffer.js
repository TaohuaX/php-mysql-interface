const fs = require('fs');
const http = require('http');
const utility = require('utility');
const express = require('express');
const nodeExcell = require('node-xlsx');
const buf = new Buffer('www.w3cschool.cn');
const app = express();
// buf.write();
// console.log(buf.slice(0,6).toString())
// 读取文件
// fs.readFile('test.txt', 'utf8', (err, data) => {
//     console.log('异步======' + data)
// })
// console.log('同步=========' + fs.readFileSync('test.txt', 'utf8'))
// let fileStream = fs.createReadStream('test.txt');
// let s = ''
// fileStream.on('data', (data) => {
//     console.log(data.toString())
//     s += data
// })
// fileStream.on('end', (err, data) => {
//     console.log('stream======' + s)
// })
app.get('/', (req, res) => {
    // let str1 = fs.createReadStream('a.xlsx');
    // let str2 = fs.createWriteStream('a1.xlsx');
    // str1.pipe(str2);
    // res.statusCode = 301
    // let str = nodeExcell.parse('a.xlsx');
    // res.send(str);
    // res.setTimeout(2000, () => {
    //     res.send('请求超时');
    // });
    // res.statusMessage = 'hee'
    // let str = nodeExcell.parse('a.xlsx');
    req.write({id:1},'utf8');
    res.send('hhhhhhhhhhhh');
    res.end();
});
app.listen(5000, () => {
    console.log('服务已打开')
})