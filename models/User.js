const {DataTypes} = require('sequelize');
const db = require('../db/conn')
const User = db.define('User',{
    nome:{
       type:DataTypes.STRING,
       allowNull:false
    },
    email:{
       type:DataTypes.STRING,
       required:true

    },
    senha:{
       type:DataTypes.STRING,
       required:true 
    },
   
      
})
module.exports = User;