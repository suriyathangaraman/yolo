const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const cityModel = sequelize.define(tabelNames.cityMaster, {
            city_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            state_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            city_name: { type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.INTEGER , default :1 }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return cityModel;
};
