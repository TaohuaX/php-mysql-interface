const net = require('net');
let server = net.createServer();
server.on('connect', client => {
        // client 就是指向客户端的对象，可以给客户端发送数据。  
        //           可读写流   可以写入/读取数据
        console.log('连接上了哦')
        client.on('data', data => {
                console.log(data.toString('utf8'))
        })
        client.write('我是来自服务器端的数据')
        client.end('关闭连接')
})
server.listen(8888);