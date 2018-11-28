const express = require ('express');
const app = express();
console.log ('Application object initialized..');

const appRouter = require ('./application-router');
console.log ('Application router initialized..');

app.use ('/api',appRouter);

/**
 * Configure application to listen on port 80.
 */
app.listen(80, () => {
    console.log ('Application listening on port 80');
});
