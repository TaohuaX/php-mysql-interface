function Hello () {
        let name;
        this.setName = (argname) => {
                name = argname
        }        
        this.say = () => {
                console.log(name)
        }
}
module.exports = Hello;