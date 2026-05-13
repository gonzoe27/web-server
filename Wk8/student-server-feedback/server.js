const express = require('express'); //this imports the express library
const path = require('path'); //path is used to locate where different files are in the directory
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index.js'); //this will import the data from the index.js

const app = express(); //this creates the web server app

//enable parsing of post request body
app.use(bodyParser.urlencoded({extended: false}));

const staticFileLocation = path.join(__dirname, 'public');
app.use(express.static(staticFileLocation));

app.set('views', path.join(__dirname, 'views'));
//__dirname means that is where the code is being held under the views dir
app.set('view engine', 'hbs'); //tells the engine to use handle bars to generate views

app.use('/' ,indexRouter);//all requests to the app will be passed to index router

//start the server running
const server = app.listen(process.env.PORT || 3000, function(){
//this means that you are telling the server to run on a given port by the app if no port given run on port 3000

    console.log('Express server started on port ' + server.address().port);
    //prints a message to let you know what port
});