function setName (argname) {
        console.log(argname)
}
function getName(callback, value){
        console.log(value)
}
getName(setName('李四'), '测试');
console.log(__dirname)
console.log(__filename)