const http = require('http');
http.createServer((req, res) => {
        // 定义http头
        res.writeHead(200, {'Content-Type': 'text/plain'});
        // 发送响应数据
        res.end('hello world\n');
}).listen(3000);