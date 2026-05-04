
module.exports = (sequelize, DataTypes) => {
    //define the model
    const Student = sequelize.define('Student', {
        //define the columns in the database, give them a name and a type
        name:{
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false,
            }
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                notEmpty: false
            }
            //TODO future = check for aa1234aa
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        }
    })

    //create or update table in the database
    Student.sync({force: false}).then( () => {
        console.log('Synced student table')
    })

    return Student
}