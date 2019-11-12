const Sequelize = require('sequelize');

var sequelize = new Sequelize(
    'htmldatabase',                 // Database
    'root',                 // Username
    'ilovecoding',     // Password
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

// Models
const Item = sequelize.import(__dirname + '/item-model');
const Location = sequelize.import(__dirname + '/location-model');

// Associations
Location.hasOne(Item);

sequelize.sync({ force: true }).then(() => {
    Location.create({ address: '123 Somewhere' });
    Item.create({ name: 'test', locationId: 1 });
});

module.exports = {
    Item,
    Location
};
