const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const residenceTypeModel = sequelize.define(tabelNames.residenceTypeMaster, {
    residence_type_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       category_Id: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    residence_type: { type: DataTypes.STRING, allowNull: false},
    dimension: { type: DataTypes.STRING, allowNull: false},
    unit: { type: DataTypes.STRING, allowNull: false},
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return residenceTypeModel;
};
