const dbjson = require('../db.json');
// 获取所有的用户数据
exports.fetchUsers = function () {
    return dbjson.users;
}
// 获取用户数据
// page 第几页
// size 一页多少条
exports.fetchPageUsers = function (page, size) {

}