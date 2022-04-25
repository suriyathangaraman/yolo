const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const guestCredMasterModel = sequelize.define(tabelNames.guestCredMaster, {
            guest_Credential_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            guest_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            password: { type: DataTypes.STRING, allowNull: false},
            guest_type: { type: DataTypes.STRING},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return guestCredMasterModel;
};
