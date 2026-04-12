const express = require('express')
const path = require('path')
const bmiRouter = require('./routes/bmi')

const app = express()



//app.set = configuration
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

//app.use = things to do with handling request
// '/' is the 'folder' or address of the home page 
app.use('/', bmiRouter)

let server = app.listen(3000, function(){
    console.log('Server running on port 3000')
})