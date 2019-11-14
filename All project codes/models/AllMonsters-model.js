module.exports = (sequelize, DataType) => {
    return sequelize.define('allMonster', {
        name: {
            type: DataType.STRING
        },
        size: {
            type: DataType.STRING
        },
        creatureType: {
            type: DataType.STRING
        },
        alignment: {
            type: DataType.STRING
        },
        speed: {
            type: DataType.STRING
        },
        AC: {
            type: DataType.INTEGER
        },
        HP: {
            type: DataType.INTEGER
        },
        STR: {
            type: DataType.INTEGER
        },
        DEX: {
            type: DataType.INTEGER
        },
        CON: {
            type: DataType.INTEGER
        },
        INT: {
            type: DataType.INTEGER
        },
        WIS: {
            type: DataType.INTEGER
        },
        CHA: {
            type: DataType.INTEGER
        }
    });
}