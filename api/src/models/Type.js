const { DataTypes, INTEGER, UUIDV1, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('type', {
        id : {
            type : DataTypes.INTEGER,
            primaryKey : true,
            autoIncrement : true
        },
        name : {
            type : DataTypes.STRING,
            allowNull : false,
        },
    });
};