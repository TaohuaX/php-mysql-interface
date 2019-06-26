const fs = require('fs');
const path = require('path');
const dbjson = require('../db.json');
// 获取所有的用户数据
exports.fetchUsers = function () {
    return dbjson.users;
}
// 获取用户数据
// page 第几页
// size 一页多少条
exports.fetchPageUsers = function (page, size) {
    let start = page * size - size;
    let end = page * size;
    let data = dbjson.users.slice(start, end);
    return data;
}
// 获取用户数据
// id ID
// name 用户名
exports.addUsers = function (id, name) {
    dbjson.users.push({'id': id, 'name': name})
    fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify({users: dbjson.users}), {
        encoding: 'utf8'
    });
    return  {
        msg: '保存成功',
        code: 1
    }
}
// 删除用户信息
// name : 当前的name
exports.delUsers = (name) => {
    dbjson.users.forEach((item, index) => {
        if (item.name === name) {
            
            dbjson.users.splice(index, 1);
            console.log(dbjson.users[index])
            // fs.writeFileSync(path.join(__dirname, '../db.json'), JSON.stringify({users: dbjson.users}), {
            //     encoding: 'utf8'
            // });
            return  {
                msg: '保存成功',
                code: 1
            }
        }
    });
}