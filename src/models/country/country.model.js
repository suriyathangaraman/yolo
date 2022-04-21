const { DataTypes } = require("sequelize");

let countryModel = {};

countryModel.schema = {
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
    modified_by: { type: DataTypes.STRING },
};

countryModel.utils = {};

module.exports = { countryModel };