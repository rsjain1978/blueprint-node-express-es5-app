const {get} = require ('./controllers');
const {del} = require ('./controllers');
const {create} = require ('./controllers');

const {Router} = require ('express');
const router = Router ();

router.get ('/foo', get.getFoo);
console.log ('Configured get function for foo..');

module.exports = router;