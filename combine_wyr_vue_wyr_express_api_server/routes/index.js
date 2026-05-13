const express = require('express');

const randomWYRQuestion = require('../model/wyr_question'); //will grab the wyr question from file

const router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Place holder for home page')
})

router.get('/wyr', function(req, res, next  ) {
    //const wyr = {
        //'question' : 'Live in a circle house or a triangle house',
        //'answer1' : 'Circle house',
        //'answer2' : 'Triangle house'
    //}

    const wyr = randomWYRQuestion(); //this calls the funtion RANDOMWYRQUESTION to display a random wyr question

    res.json(wyr);

})

module.exports = router;

