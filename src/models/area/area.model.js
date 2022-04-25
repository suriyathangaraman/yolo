const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const areaModel = sequelize.define(tabelNames.areaMaster, {
            area_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            city_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            area_name: { type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return areaModel;
};
