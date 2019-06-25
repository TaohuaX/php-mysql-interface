const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const urlencodedParser = bodyParser.urlencoded({
        extended: false
})
app.use(express.static('public'));
// app.get('/b', (req, res) => {
//         res.send('hello word' + req.query.ss)
// })
// app.get('/a/:id', (req, res) => {
//          // 输出文本
//         // res.send(req.params.id)
//         // 输出json
//         res.json({
//                 id: req.params.id
//         })
// })
app.get('/index', (req, res) => {
        res.sendFile(__dirname + '/views/' + 'index.html');
});
app.post('/index',  urlencodedParser, (req, res) => {
        console.log(req.body)
        res.redirect('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd='+req.body.data +'&rsv_pq=e511265a0000fee1&rsv_t=c24eEzBeeOLQSawY1xAHLzQ5jUpym%2B2TirmZ2tAw9nbYAJln9pqVS8QZt4A&rqlang=cn&rsv_enter=0&rsv_sug3=2&rsv_sug1=2&rsv_sug7=101&inputT=39695&rsv_sug4=39695')
})
app.listen(4000, () => {
        console.log('请打开网址：http://%h:%s', '127.0.0.1', '4000')
})