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
            isEmail_verified: { type: DataTypes.INTEGER, default : 0},
            isPhone_verified: { type: DataTypes.INTEGER, default: 0},
            photos: { type: DataTypes.STRING},
            country_code : {type: DataTypes.STRING},
            details: { type: DataTypes.STRING},
            occupation: { type: DataTypes.STRING},
            father_name: { type: DataTypes.STRING},
            mother_name: { type: DataTypes.STRING},
            gaurdian_name: { type: DataTypes.STRING},
            emergency_contact_no: { type: DataTypes.STRING},
            parent_login_Id: { type: DataTypes.STRING},
            profile_score: { type: DataTypes.INTEGER},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING },
            
    },{
        indexes: [
           {
               unique: true,
               fields: ['email', 'phone_number']
           }
       ]
    });

    return guestMasterModel;
};
