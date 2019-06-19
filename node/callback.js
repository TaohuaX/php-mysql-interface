// 引入filestream库
const fs = require('fs');
// 阻塞读取
// const data = fs.readFileSync('data.txt').toString();
// console.log(data)
// console.log('之后出现')

// 非阻塞读取
const data1 = fs.readFile('data.txt', (err, data1) => {
        err? console.log(err) : console.log(data1.toString())
})
console.log('之前出现')