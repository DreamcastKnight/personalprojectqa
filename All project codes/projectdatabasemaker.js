var express = require('express');
var app = express();
app.use(express.json());
const Sequelize = require('Sequelize');

var sequelize = new Sequelize(
    'projectdatabase',             //database
    'root',             //username
    'ilovecoding',         //password
    {
        host: 'localhost',
        dialect: 'mysql'
    });

const Monster = sequelize.define('monster', {
    name: {
        type: Sequelize.STRING
    },
    HP: {
        type: Sequelize.INTEGER
    },
    STR: {
        type: Sequelize.INTEGER
    },
    DEX: {
        type: Sequelize.INTEGER
    },
    CON: {
        type: Sequelize.INTEGER
    },
    INT: {
        type: Sequelize.INTEGER
    },
    WIS: {
        type: Sequelize.INTEGER
    },
    CHA: {
        type: Sequelize.INTEGER
    }


});

app.get('/add', async (req, res) => {
    await Monster.create({ name: "adult copper dragon", HP:184, STR:23, DEX:12, CON:21,INT:18,WIS:15,CHA:17})
    res.send("added")
})

app.get('/all', async (_req, res) => {
    const result = await Monster.findAll();
    res.send(result);
});

Monster.sync({ force: true });

app.listen(8080);

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });