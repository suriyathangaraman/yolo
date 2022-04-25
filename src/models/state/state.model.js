//const { DataTypes } = require("sequelize");
const {countryModel}= require('../country/country.model')
const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const stateModel = sequelize.define(tabelNames.stateMaster, {
            state_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            country_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            state_name: { type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return stateModel;
};
