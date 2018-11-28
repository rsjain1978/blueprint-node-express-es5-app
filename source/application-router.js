const {Router} = require('express');

const {fooRouter} = require ('./fooModule')

router = Router ();
router.use (fooRouter);

console.log ('Router for Foo Module initialized..');

module.exports = router;
