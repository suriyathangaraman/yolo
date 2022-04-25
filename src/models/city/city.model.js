const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize, Sequelize) => {

    const cityModel = sequelize.define("city", {
            city_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            },
            state_Id: {
                type: DataTypes.UUID,
                allowNull: false,
            },
            city_name: { type: DataTypes.STRING, allowNull: false},
            status: { type: DataTypes.STRING }, 
            created_by: { type: DataTypes.STRING},
            modified_by: { type: DataTypes.STRING }
    });

    return cityModel;
};
