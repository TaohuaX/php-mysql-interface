const userService = require('../service/userservice.js');   //要测的模块
const assert = require('assert'); // 断言库
// 定义测试场景   第一个参数 ：场景的描述      第二个参数：测试场景的回调
describe('我是第一个测试用例', function () {
    // 定义测试用例     测试fetchUsers方法是否达到我们的预期
    it('#fetchUsers()', function () {
        // 这个方法返回一个数组
        var arr = userService.fetchUsers();
        assert.equal(true, Array.isArray(arr));
        assert.equal(false, arr.length > 1000);
    })
    it('#fetchPageUsers()', function () {
        console.log('哈哈')
    })
});