var express = require('express');
const itemRouter = require('./routes/items-routes');
var app = express();

app.use(express.json());

app.use('/item', itemRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080.')
});