const express = require('express')


const router = express.Router()

router.get('/', function(req, res, next){
    console.log('A request is made')
    res.render('home')
})

router.get('/calculate', function(req, res, next){
    const formData= req.query
    console.log(formData)
    const height = Number(formData.height)
    //get validation
    const weight = Number(formData.weight)
    //get validation
    //do the math of bmi
    const bmi_results = height + weight //This is the wrong math needs to be fixed

    res.render('results', { bmi: bmi_results})
})

//Last line of this page 
module.exports = router