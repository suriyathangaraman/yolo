const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const adminModel = sequelize.define(tabelNames.admin, {
            id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            name: { type: DataTypes.STRING, allowNull: false},
            email_Id: { type: DataTypes.STRING ,allowNull: false}, 
            password : { type: DataTypes.STRING,allowNull: false},
            userType: { type: DataTypes.STRING,allowNull: false },
            phone_number: { type: DataTypes.STRING,allowNull: false }
    });

    return adminModel;
};
