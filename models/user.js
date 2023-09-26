const Seq = require('sequelize')

const seq = require('../util/database')

const User = seq.define('user', {
    id:{
        type:Seq.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:Seq.STRING,
    email: Seq.STRING
})

module.exports= User