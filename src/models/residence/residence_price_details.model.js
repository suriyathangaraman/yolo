const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const residencePriceDetailModel = sequelize.define(tabelNames.residencePriceDetail, {
        residence_price_detail_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       residence_price_Id: { type: DataTypes.UUID, allowNull: false },
       room_Id: { type: DataTypes.UUID, allowNull: false },
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return residencePriceDetailModel;
};
