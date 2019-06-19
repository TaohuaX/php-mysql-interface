const url = require('url');
const http = require('http');
function Start (route) {
        function option (req, res) {
                var pathname = url.parse(req.url).pathname;
                res.writeHead(200, {
                        'Content-Type': 'text/plain', 
                        'charset': 'UTF-8'
                });
                route(pathname, res);
                res.write('hello http');
                res.end();
        }
        http.createServer(option).listen(3000)
}
module.exports = Start;