const express = require('express'); //again telling them that you require express
const router = express.Router(); //figures out what cod rto run in response to a request
//typically based on the url and the method

//responds to get request to home page
router.get('/', function(req, res,next){
    //name of the handlebars files. Gives a name to the template
    res.render('index', {
        title: "Feedback Application",
        author: 'Zoe Onan Gonzalez Rivera',
        timePageLoadedAt: new Date()
    });

})//this a get request to the home page

router.get('/feedback-form', function(req, res,next){
    res.render('students-feedform.hbs', {})
})//this is the request for the feedback form

router.post('/submit-feedback', function(req, res,next){
    //need to access the form

    const formData= req.body;
    console.log(formData);

    res.render('thank_you', {
        name: formData.name,
        email: formData.email,
        comments: formData.comments,
        currentStudent: formData['currentStudent']
    })

})



//has to be the last line in the file
module.exports = router;//return this router obj to where ever it needs more information