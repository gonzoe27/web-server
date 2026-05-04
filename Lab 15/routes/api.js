const express = require('express');
const database = require('../models/index'); //will require the index.js file form the directory
const Student = database.Student // the student model

const router = express.Router();

router.get('/students', function(req, res, next) {
    //query database, get all rows from DB,
    //converts to JSON
    //available in the then function
    Student.findAll( {order: ['name'] } ).then(students => {
        return res.json(students);
    })
})

router.post('/students', function(req, res, next){
    const newStudent = req.body;
    console.log(newStudent);
    Student.create(newStudent).then( result => {
        return res.status(201).send('New student created!');
    }).catch(err => {
        //400 bad request - client is sending a request the server can't fulfill
        //return res.status(400).send('Invalid Data');
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message);
            return res.status(400).json(messages);
        }else{
            //some other error?
            next(err)
        }
    })
})

router.patch('/students/:id', function(req, res, next){
    //matches requests to students/x
    //req,params stores the id value
    //store any placeholder in the url

    const studentId = req.params.id;
    const updatedStudent = req.body;//update data about this student
    console.log(updatedStudent)
    Student.update( updatedStudent, { where: { id: studentId } } ).then( (result) => {

        const rowsModified = result[0]
        //if 1 row was changed, we found student and they were updated
        if (rowsModified === 1 ) {
            res.send('OK')
        }
        //student id that doesn't exist
        else{
            //if 0 rows were updated, student not found
            res.status(404).send('Student Not Found');
        }


        res.send('ok')      //status is 200 by default
    }).catch ( err => {         //database error - can't connect, or database reports error
        //400 bad request - client is sending a request the server can't fulfill
        //return res.status(400).send('Invalid Data');
        if (err instanceof database.Sequelize.ValidationError) {
            const messages = err.errors.map( e => e.message);
            return res.status(400).json(messages);
        }else{
            //some other error?
            next(err)
        }
                //invalid data in the updated student -e.g. no name
                //database problems that app cant connect to database
        // TODO kinds of errors we could see
        //student id that doesn't exist
        //invalid data in the updated student -e.g. no name
        //database problems that app cant connect to database
    })
})

router.delete('/students/:id', function(req, res, next){
    //delete request to /api/students/4 will delete student with id 4
    const studentID = req.params.id;
    Student.destroy( { where: { id: studentID } } ).then( (rowsDeleted) => {
        if (rowsDeleted === 1 ){
            //if one row was deleted this will trigger
            return res.send('Student deleted')

        }else{
            // 0 rows deleted then this will trigger
            res.status(404).send('Student Not Found');
        }

    }).catch( err => { //if the
        return next(err)
    })
})

module.exports = router;