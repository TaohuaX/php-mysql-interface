const net = require('net');
let client = net.connect(8888, ' 127.0.0.1', () => {
        console.log('我连接上了服务器哦')
})
client.on('data', data => {
        console.log(data.toString('utf8'))
})
client.write('我是客户端发送的数据')
client.end()
