const {DataTypes} = require('sequelize');
const db = require('../db/conn')
const Fundacao = db.define('Fundacao',{
    
    tipo:{
      type:DataTypes.INTEGER,
      required:true
    },
    Obra:{
      type:DataTypes.INTEGER,
      required:true
    },
    quantidade:{
      type:DataTypes.INTEGER,
      required:true
    },
    etiqueta:{
      type:DataTypes.STRING,
      required:true
    },
    larguraRadie:{
      type:DataTypes.DOUBLE,
      required:false
    },
    larguraBloco:{
      type:DataTypes.DOUBLE,
      required:false
    },
    larguraEstaca:{
      type:DataTypes.DOUBLE,
      required:false
    }, 
    larguraSapata:{
      type:DataTypes.DOUBLE,
      required:false
    },
    larguraCalice:{
      type:DataTypes.DOUBLE,
      required:false
    },


    ComprimentoRadie:{
      type:DataTypes.DOUBLE,
      required:false
    },
    ComprimentoBloco:{
      type:DataTypes.DOUBLE,
      required:false
    },
    ComprimentoEstaca:{
      type:DataTypes.DOUBLE,
      required:false
    }, 
    ComprimentoSapata:{
      type:DataTypes.DOUBLE,
      required:false
    },
    ComprimentoCalice:{
      type:DataTypes.DOUBLE,
      required:false
    },

    alturaRadie:{
      type:DataTypes.DOUBLE,
      required:false
    },
    alturaBloco:{
      type:DataTypes.DOUBLE,
      required:false
    },
    alturaEstaca:{
      type:DataTypes.DOUBLE,
      required:false
    }, 
    alturaSapata:{
      type:DataTypes.DOUBLE,
      required:false
    },
    alturaCalice:{
      type:DataTypes.DOUBLE,
      required:false
    },
     
   

})
module.exports = Fundacao;