const connect = require('connect');
// connect本身是个函数      返回一个中间件控制器
let app = connect()
// 注册中间件
app.use((req, res, next) => {
        console.log('1')
        next(); // 执行下一个中间件
})
app.use((req, res, next) => {
        console.log('2')
        next(); // 执行下一个中间件
})
// 如果请求api在执行  否则不执行这个中间件
app.use('/api', (req, res, next) => {
        console.log('4')
        next(); // 执行下一个中间件
})
app.use((req, res, next) => {
        console.log('3')
        res.end()
})
// 传入4个参数   就是错误处理的中间件
app.use((err,req, res, next) => {})
app.listen(4000, () => {
        console.log('成功了')
});