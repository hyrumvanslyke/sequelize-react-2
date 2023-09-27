const Seq = require('sequelize')
const seq = require('../util/database')

const CartItem = sequelize.define('cart', {
    id:{
        type: Seq.STRING,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true

    },
    quantity: Seq.INTEGER
})
module.exports = CartItem