const { Sequelize, DataTypes } = require("sequelize");
const { tabelNames} = require('../../config/tableNames.config');



module.exports = (sequelize, Sequelize) => {

   const residenceVideosModel = sequelize.define(tabelNames.residenceVideosMaster, {
        residence_video_Id: {
           type: DataTypes.UUID,
           primaryKey: true,
           defaultValue: DataTypes.UUIDV4,
           unique: true,
           allowNull:false
       },
       residence_Id: { type: DataTypes.UUID, allowNull: false },
       video: { type: DataTypes.STRING, allowNull: false },
       status: { type: DataTypes.INTEGER , default :1 }, 
       created_by: { type: DataTypes.STRING},
       modified_by: { type: DataTypes.STRING }
   });


   return residenceVideosModel;
};
