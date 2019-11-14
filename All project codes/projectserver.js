var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors());
app.use(express.json());
const models = require('./models');

const monsterRouter = require('./routes/monster-routes');
const AllMonsterRouter = require('./routes/All_Monster-routes');


app.get('/', (req, res) => {
    res.send('Hello, World!')
});


app.use('', monsterRouter);
app.use('', AllMonsterRouter);

app.listen(8080);



module.exports=app;