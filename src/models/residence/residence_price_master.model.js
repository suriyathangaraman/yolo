const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const residencePriceModel = sequelize.define(tabelNames.residencePriceMaster, {
        residence_price_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       residence_Id: { type: DataTypes.UUID, allowNull: false },
       price: { type: DataTypes.INTEGER, allowNull: false },
       duration: { type: DataTypes.STRING, allowNull: false },
       advance_amount: { type: DataTypes.INTEGER, allowNull: false },
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return residencePriceModel;
};
