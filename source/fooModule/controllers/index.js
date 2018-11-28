const get = require ('./get-foo');
const create = require ('./create-foo');
const del = require ('./delete-foo');

console.log ('Controller for handling Foo GET initialized' + get);
console.log ('Controller for handling Foo POST initialized' + create);
console.log ('Controller for handling Foo DELETE initialized' + del);

module.exports= {
    get,
    create,
    del
};