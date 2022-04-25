const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
    
  host: process.env.DB_HOST,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  },

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.countryModel = require('./country/country.model')(sequelize, Sequelize);
db.stateModel = require('./state/state.model')(sequelize, Sequelize);
db.cityModel = require('./city/city.model')(sequelize, Sequelize);
db.areaModel = require('./area/area.model')(sequelize, Sequelize);
db.guest_master_model = require('./guest/guest_master.model')(sequelize, Sequelize)

db.countryModel.hasOne(db.stateModel, {foreignKey: 'country_Id'});
db.stateModel.belongsTo(db.countryModel, {foreignKey: 'country_Id'});

db.stateModel.hasOne(db.cityModel, { foreignKey: 'state_Id'});
db.cityModel.belongsTo(db.stateModel, { foreignKey: 'state_Id'});

db.cityModel.hasOne(db.areaModel, {foreignKey: 'city_Id'});
db.areaModel.belongsTo(db.cityModel, { foreignKey: 'city_Id'});

db.areaModel.hasMany(db.guest_master_model, {foreignKey: 'area_Id'});
db.guest_master_model.belongsTo(db.areaModel, {foreignKey: 'area_Id'})


module.exports = db;
