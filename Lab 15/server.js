const express = require('express');

const apiRoutes = require('./routes/api');

const path = require('path');

//create web application server
const app = express();

const staticFilePath = path.join(__dirname, 'client', 'dist'); //tells computer to look for files in the client folder
const staticFiles = express.static(staticFilePath);
app.use('/', staticFiles); //request to home page, serve static file - VUE app index.html
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

