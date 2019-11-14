const express = require('express');
const models = require('../models');

const router = express.Router();

router.get('/monadd/:name/:size/:creatureType/:alignment/:speed/:AC/:HP/:STR/:DEX/:CON/:INT/:WIS/:CHA', async (req, res) => {
    await models.AllMonster.create({
        name: req.params.name,
        size: req.params.size, creatureType: req.params.creatureType,
        alignment: req.params.alignment, speed: req.params.speed,
        HP: req.params.HP, STR: req.params.STR,
        DEX: req.params.DEX, CON: req.params.CON,
        INT: req.params.INT, WIS: req.params.WIS,
        CHA: req.params.CHA, AC: req.params.AC
    })
    res.send("added")
})

router.get('/monall/:name', async (req, res, next) => {
    const result = await models.AllMonster.findAll({
        where: {
            name: req.params.name
        },
    });
    res.send(result);
});

router.get('/monall', async (req, res, next) => {
    const result = await models.AllMonster.findAll();
    res.send(result);
});
  

router.get('/break-stuff', (req, res, next) => {
    next('oh, no.')
});

router.use((err, req, res, next) => {
    res.send({
        error: 'congratulations. you played yourself',
        messsage: err
    });
});

module.exports = router;