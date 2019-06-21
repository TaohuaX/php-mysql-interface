const http = require('http');
// get请求
http.get('http://aicoder.com', res => {
        res.on('data', trunk => {
                console.log(trunk.toString('utf8'))
        })
})
// post请求
let request = http.request({
        protocol: 'http:',
        host: 'baidu.com',
        port: 80,
        method: 'POST',
        timeout: 2000,
        path: '/'
}, res => {
        res.on('data', trunk => {
                console.log(trunk.toString('utf8'))
        })
})
request.end(); // 这才是真正的发送请求