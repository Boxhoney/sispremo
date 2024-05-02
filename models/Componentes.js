const {DataTypes} = require('sequelize');
const db = require('../db/conn')
const Componentes = db.define('Componentes',{
    
    tipo:{
      type:DataTypes.STRING,
      required:true
    },
    
     
   

})
module.exports = Componentes;