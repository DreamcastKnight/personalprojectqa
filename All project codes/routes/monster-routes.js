const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/add', async (req, res) => {
    await models.AllMonster.create({ name: "adult copper dragon", HP: 184, STR: 23, DEX: 12, CON: 21, INT: 18, WIS: 15, CHA: 17, AC:18})
    res.send("added")
})

router.get('/all/:name', async (req, res, next) => {
    const result = await models.AllMonster.findAll({
        where: {
            name: req.params.name
        },
    });
    res.send(result[0]);
});

router.get('/break-stuff', (req,res,next) => {
    next('oh, no.')
});

router.use((err, req, res, next ) => {
    res.send({
        error: 'congratualtions. you played yourself',
        messsage: err
    });
});

module.exports = router;