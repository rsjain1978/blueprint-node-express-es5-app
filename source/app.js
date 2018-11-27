const express = require ('express');
console.log ('Initialized Express object..');

const appRoutes = require ('./app-router');
console.log ('Application router initialized..'+appRoutes);

const app = express();
console.log ('Initialized applicaton object..');

app.use (appRoutes);

app.listen(80, () => {
    console.log ('Application listening on port 80');
});
