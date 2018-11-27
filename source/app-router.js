const {Router} = require('express');

const fooRouter = require ('./fooModule')

console.log ('Received router for foo module'+fooRouter.fooRouter);

router = Router ();
router.use (fooRouter.fooRouter);

module.exports = {
    router
};
