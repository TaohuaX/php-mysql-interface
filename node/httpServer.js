const http = require('http');
http.createServer((req, res) => {
        console.log(req.headers);
        console.log(req.url);
        console.log(req.method);
        res.writeHead(200, {
                'Content-Type': 'text/html'
        });
        res.write('hello')
        res.end();
}).listen(4000, () => {
        console.log('请打开:http://127.0.0.1:4000' );
});