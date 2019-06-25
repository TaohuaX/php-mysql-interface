const express = require('express');
const path = require('path');
const art_express = require('express-art-template');
const app = express();
const userServie = require('./service/userservice.js');
// 设置art-template的模板引擎
app.engine('art',  art_express);
// 提供静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));
// 动态请求
app.get('/user/list', (req, res) => {
        // 默认从根目录下  的views文件夹下搜索
                // render方法第一个参数是文件名
                // 第二个参数是给模板的数据
        res.render('userlist1.art', {
                title: '你好啊!',
                users: userServie.fetchUsers()
        })
})
app.listen(4002, () => {
        console.log(__dirname);
        console.log('启动成功');
});