const { DataTypes, INTEGER, UUIDV1, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id : {
      type : DataTypes.UUID,
      defaultValue : UUIDV4,
      primaryKey : true,
    }, 
    name: {
      type: DataTypes.STRING,
      unique : true
    },
    type : {
      type:DataTypes.STRING,
    },
    hp : {
      type: DataTypes.INTEGER,
    },
    attack : {
      type: DataTypes.INTEGER,
    },
    defense : {
      type: DataTypes.INTEGER,
    },
    speed : {
      type: DataTypes.INTEGER,
    },
    height : {
      type: DataTypes.INTEGER,
    },
    weight : {
      type: DataTypes.INTEGER,
    },
    image : {
      type : DataTypes.STRING,
    }
  });
};
