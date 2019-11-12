var express = require('express');

var router = express.Router();
var data = ["zero", "one", "two", "three", "four"]

router.get('/test', (req, res) => {
    res.send("it worked")
});

router.post('/post', (req, res) => {
    data.push(req.body)
    res.send(data)
});

router.get('/:index', (req, res) => {
    res.send(data[req.params.index]);
});


router.delete('/:index', (req, res) => {
    data.splice(req.params.index, 1);
    res.send(data);
});

router.put('/:index/:val', (req, res) => {
    data[req.params.index] = req.params.val
    res.send(data);
})


module.exports = router;