 const { Sequelize, DataTypes } = require("sequelize");
 const { stateModel } = require('../state/state.model');
 const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

    const countryModel = sequelize.define(tabelNames.countryMaster, {
        country_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            allowNull:false
        },
        country_Name: { type: DataTypes.STRING, allowNull: false},
        status: { type: DataTypes.STRING }, 
        created_by: { type: DataTypes.STRING},
        modified_by: { type: DataTypes.STRING }
    });


    return countryModel;
};
