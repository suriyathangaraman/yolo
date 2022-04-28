const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const propertyMasterModel = sequelize.define(tabelNames.propertyMaster, {
        property_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       area_Id: { type: DataTypes.UUID, allowNull: false },
       property_name: { type: DataTypes.STRING, allowNull: false },
       full_address: { type: DataTypes.STRING, allowNull: false },
       email: { type: DataTypes.STRING, allowNull: false},
       phone_number: { type: DataTypes.STRING, allowNull: false},
       details: { type: DataTypes.STRING, allowNull: false},
       total_floor: { type: DataTypes.INTEGER, allowNull: false},
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return propertyMasterModel;
};
