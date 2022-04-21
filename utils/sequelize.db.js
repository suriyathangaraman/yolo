const Sequelize = require("sequelize");
const { schema, utils } = require("../src/models/index.model");

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


schema.forEach(x => {

    db[x.model] = sequelize.define(x.table, x.path.schema, x.path.utils);
    db[x.model].associate = x.path.associate;
});

/* Object.keys(db).forEach(function (modelName) {
    if (modelName != 'Sequelize' && modelName != 'sequelize') {
        if (db[modelName].associate) {
            db[modelName].associate(db[modelName], db)
        }
    }
}) */


// associations

db.countryModel.hasOne(db.stateModel, {foreignKey: 'country_Id'})
db.stateModel.belongsTo(db.countryModel, {foreignKey: 'country_Id'})

db.sequelize.sync({alter: true}).then(()=>{}).catch(err=>console.log(err))


module.exports = db;