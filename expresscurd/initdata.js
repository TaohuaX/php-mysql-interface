const fs = require('fs');
const path = require('path');
const dbjson = require('./db.json');
// 初始化users属性
dbjson.users || (dbjson.users = []);
for(let i = 0; i < 30; i++){
    dbjson.users.push({
        id: '1000' + i,
        name: 'lisi==' + i
    })
}
fs.writeFileSync(path.join(__dirname, 'db.json'), JSON.stringify(dbjson), {
    encoding: 'utf8'
});
console.log('写入数据成功');


