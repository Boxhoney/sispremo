const {Sequelize} = require('sequelize');
const sequelize = new Sequelize('premoaco','marcelo','593204',{
  host:'localhost' ,
  dialect:'mysql'
});

module.exports = sequelize