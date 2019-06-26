const express = require('express');
const path = require('path');
const art_express = require('express-art-template');
const app = express();
const userServie = require('./service/userservice.js');
const bodyParser = require('body-parser');
const multer = require('multer');
// 设置art-template的模板引擎
app.engine('art',  art_express);
// 提供静态目录的中间件
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// 动态请求         获取全部的数据
app.get('/user/list', (req, res) => {
        // 默认从根目录下  的views文件夹下搜索
                // render方法第一个参数是文件名
                // 第二个参数是给模板的数据
        res.render('userlist1.art', {
                title: '你好啊!',
                users: userServie.fetchUsers()
        })
})
// 动态请求             分页获取数据
app.get('/user/pagelist', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 20;
    const data = userServie.fetchPageUsers(page, size) || [];
    res.render('userlist1.art', {
        title: '你好啊--分页!',
        users: data
    })
})
// 添加用户
app.post('/user/add', (req, res) => {
    const data = userServie.addUsers(req.body.id,  req.body.username);
    // const data = userServie.addUsers(req.body.id,  req.body.username);
    res.redirect('/user/list');
})
// 删除用户
app.post('/user/del', (req, res) => {
    userServie.delUsers(req.body.username);
    // const data = userServie.addUsers(req.body.id,  req.body.username);
    res.redirect('/user/list');
})
app.listen(4000, () => {
        console.log(__dirname);
        console.log('启动成功');
})