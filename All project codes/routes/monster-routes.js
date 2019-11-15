const express = require('express');
const models = require('../models');

const router = express.Router();

// router.get('/add', async (req, res) => {
//     await models.Monster.create({ name: "adult copper dragon", HP: 184, STR: 23, DEX: 12, CON: 21, INT: 18, WIS: 15, CHA: 17, AC: 18 })
//     res.send("added!!!")
// })

router.get('/all/:name', async (req, res, next) => {
    const result = await models.Monster.findAll({
        where: {
            name: req.params.name
        },
    });
    res.send(result[0].name);
});

router.get('/getData/:name', async (req, res, next) => {
    const aresult = await models.Monster.findAll({
        order: [
            ['id', 'DESC']
        ],
        where: {
            name: req.params.name
        },
    });
    res.send(aresult[0].name);
});

router.put('/change/:name/:HP', async (req, res, next) => {
    const monster = await models.Monster.findOne({ where: { name: req.params.name } });
    monster.HP = req.params.HP;
    await monster.save();
    res.send(monster.HP);
});


router.get('/addnew/:id', async (req, res, next) => {
    const { id: allMonsterId, ...monsterToAdd } = (await models.AllMonster.findOne({ where: { id: req.params.id } })).get({ plain: true });
    const model = await models.Monster.create({ ...monsterToAdd, allMonsterId })
    res.send(model);
    console.log(model);
});


router.delete('/delete/:name', async (req, res) => {
       await models.Monster.destroy({ where: { name: req.params.name } });
       res.send('probably worked')
});

module.exports = router;