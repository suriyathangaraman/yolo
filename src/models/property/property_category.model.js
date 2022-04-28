const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const propertyCategoryModel = sequelize.define(tabelNames.propertyCategoryMapping, {
        property_category_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       property_Id: { type: DataTypes.UUID, allowNull: false },
       category_Id: { type: DataTypes.UUID, allowNull: false },
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return propertyCategoryModel;
};
