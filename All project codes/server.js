var express = require('express');
var cors = require('cors');
const itemRouter = require('./routes/items-routes');
var app = express();

app.use(cors());

app.use(express.json());

app.use('/item', itemRouter);

app.listen(8080, () => {
    console.log('Server running on port 8080.')
});