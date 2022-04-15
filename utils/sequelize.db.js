const Sequelize = require("sequelize");
const { schema, utils } = require("../src/models/index.model");

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
    dialect: 'mssql',
    dialectOptions: {
      // Observe the need for this nested `options` field for MSSQL
      options: {
        // Your tedious options here
        port: 49175,
    database: 'yolo',
    instancename: 'SQLEXPRESS',
        useUTC: false,
        dateFirst: 1
      }
    }
  });
  
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

schema.forEach(x => {
    db[x.model] = sequelize.define(x.table, x.path.schema, x.path.utils);
    db[x.model].associate = x.path.associate;
});

Object.keys(db).forEach(function (modelName) {
    if (modelName != 'Sequelize' && modelName != 'sequelize') {
        if (db[modelName].associate) {
            db[modelName].associate(db[modelName], db)
        }
    }
})

module.exports = db;