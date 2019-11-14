const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'projectdatabase',     //database
    'root',                //username
    'ilovecoding',         //password
    {
        host: 'localhost',
        dialect: 'mysql'
    });

// Models
const Monster = sequelize.import(__dirname + '/monster-model');
const AllMonster = sequelize.import(__dirname + '/AllMonsters-model');



Monster.belongsTo(AllMonster);
AllMonster.hasMany(Monster);

sequelize.sync().then(() => {
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


module.exports = {
    Monster,
    AllMonster
};