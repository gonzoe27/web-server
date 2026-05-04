const express = require('express');

const apiRoutes = require('./routes/api');

//create web application server
const app = express();


app.use(express.json());

app.use('/api', apiRoutes);

app.use(function(req, res, next) {
    //Cant find the matching route
    res.status(404).send('ERROR 404, Sorry Not Found');
})

app.use(function (err,req,res,next) {
    //To deal with database errors
    console.log(err.stack)
    res.status(500).send('Server Error')
})

//start server running
const server = app.listen(process.env.PORT || 3000, function(){
    console.log('Express server running on port' , server.address().port);
})

