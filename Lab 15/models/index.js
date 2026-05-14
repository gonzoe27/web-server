const { Sequelize, DataTypes } = require('sequelize');

const configJson = require('../config.json');
const createStudentModel = require('./student.js');

//look for an environment variable will be called NODE_ENV and read its value
//environment variables are set for your whole computer/server
//any app running on this com/server can read these environments variables
//Azure will create an environment variable called NODE_ENV and set it to "production"
//if there is no NODE_ENV set it will use the other default value of 'development'
const env = process.env.NODE_ENV || 'development';

const dbPassword  = process.env.DB_PASS;

//read the configuration object for 'development' or 'production'
const config = configJson[env];
config.password  = dbPassword;

//reads the config for the sequalize
const sequelize = new Sequelize(config);

//makes the databse
const database = {
    sequelize : sequelize,
    Sequelize : Sequelize
}

const studentModel = createStudentModel(sequelize, DataTypes);
const studentModelName = studentModel.name; //'Student'
database[studentModelName] = studentModel;

module.exports = database