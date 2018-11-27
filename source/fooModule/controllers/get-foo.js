async function getFoo(req,res,next) {
    console.log ('GetFoo called..');
    res.send('Get Foo Called..');
}

module.exports = {
    getFoo
};