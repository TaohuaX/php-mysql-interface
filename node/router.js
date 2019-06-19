function router (pathname, res) {
        console.log(pathname)
        if (pathname == '/') {
                console.log('hello http');
        } else if (pathname == '/a/b') {
                console.log('/a/b');
        } else {
                console.log('404');
        }
}
module.exports = router