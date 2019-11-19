const express = require('express');
const models = require('../models');

const router = express.Router();

router.post('/monadd', async (req, res) => {
    const { url: backurl, ...data } = req.body;
    const newMonster = await models.AllMonster.create({ ...data, backurl });
    res.send(newMonster);
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