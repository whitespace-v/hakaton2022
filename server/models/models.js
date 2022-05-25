const sequelize  = require('../db')
const {DataTypes} = require('sequelize')

//entities
const New = sequelize.define('car', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title:               {type: DataTypes.STRING, allowNull: false },
    text:                {type: DataTypes.STRING, allowNull: false},
    date:                {type: DataTypes.STRING, allowNull: false}
})

const Offer = sequelize.define('offer', {
    id:                  {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:                {type: DataTypes.STRING, allowNull: false},
    surname:             {type: DataTypes.STRING, allowNull: false},
    patronymic:          {type: DataTypes.STRING, allowNull: false},
    group:               {type: DataTypes.STRING, allowNull: false},
    comment:             {type: DataTypes.STRING, allowNull: false},
})

//export
module.exports = { New, Offer }