const get = require ('./get-foo');
const create = require ('./create-foo');
const del = require ('./delete-foo');

console.log ('Initialized controller for getting foo' + get);
console.log ('Initialized controller for creating foo' + create);
console.log ('Initialized controller for deleting foo' + del);

module.exports= {
    get,
    create,
    del
};