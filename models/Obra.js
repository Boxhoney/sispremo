const {DataTypes} = require('sequelize');
const db = require('../db/conn');
const User = require('./User');
const Obra= db.define('Obra',{
    nomeObra:{
      type:DataTypes.STRING,
      allowNull:false
    },
    comprimento:{
      type:DataTypes.DOUBLE,
      required:true  
    },
    largura:{
      type:DataTypes.DOUBLE,
      required:true 
    },
    altura:{
      type:DataTypes.DOUBLE,
      required:true 

    },
    PeDireito:{
      type:DataTypes.DOUBLE,
      required:true 

    },
    cliente:{
      type:DataTypes.STRING,
      required:true

    },
    local:{
      type:DataTypes.STRING,
      required:true

    },
    tipoProjeto:{
      type:DataTypes.STRING,
      required:false
    },
    desenhista:{
      type:DataTypes.STRING,
      required:false
    },
    engenheiro:{
      type:DataTypes.STRING,
      required:false
    },
    fase:{
      type:DataTypes.STRING,
      required:true
    },
    dataInicio:{
      type:DataTypes.DATE,
      required:true
    },
    dataFim:{
      type:DataTypes.DATE,
      required:true
    },    
})

Obra.belongsTo(User);
User.hasMany(Obra);

module.exports = Obra;