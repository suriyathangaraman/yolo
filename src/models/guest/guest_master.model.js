const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');

module.exports = (sequelize, Sequelize) => {

    const guestMasterModel = sequelize.define(tabelNames.guestMaster, {
            guest_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            area_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            first_name: { type: DataTypes.STRING, allowNull: false},
            last_name: { type: DataTypes.STRING, },
            email: { type: DataTypes.STRING, allowNull: false},
            phone_number: { type: DataTypes.STRING, allowNull: false},
            isEmail_verified: { type: DataTypes.INTEGER, default : 0,allowNull: false,},
            isPhone_verified: { type: DataTypes.INTEGER, default: 0,allowNull: false,},
            photos: { type: DataTypes.STRING, allowNull: false},
            details: { type: DataTypes.STRING, allowNull: false},
            occupation: { type: DataTypes.STRING, allowNull: false},
            father_name: { type: DataTypes.STRING, allowNull: false},
            mother_name: { type: DataTypes.STRING, allowNull: false},
            gaurdian_name: { type: DataTypes.STRING, allowNull: false},
            emergency_contact_no: { type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return guestMasterModel;
};
