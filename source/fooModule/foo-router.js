const {get} = require ('./controllers');
const {del} = require ('./controllers');
const {create} = require ('./controllers');

const {Router} = require ('express');
const router = Router ();

console.log ('Initialized router for foo module');
console.log ('Got access to foo module controllers'+ get.getFoo);

router.get ('/foo', get.getFoo);

console.log ('Configured get function for foo..'+router);
module.exports = {
    router
};