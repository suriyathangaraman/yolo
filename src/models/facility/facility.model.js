const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const facilityModel = sequelize.define(tabelNames.facilityMaster, {
       facility_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       facility_name: { type: DataTypes.STRING, allowNull: false},
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return facilityModel;
};
