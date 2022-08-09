const {DataTypes} = require('sequelize')

const db = require('../db/conn')
const User = db.define('User', {
    name : {
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},occupation: {
    type:DataTypes.STRING,
    allowNull:false,
    required:true
},newsletter: {
    type:DataTypes.BOOLEAN
}
})

module.exports = User