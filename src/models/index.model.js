const {countryModel} = require('./country/country.model');

let schema = [];

 schema.push(
  {model: "countryModel", table: "country", path: countryModel}
); 

let utils = {
  paranoid: true,
  underscored: true,
  freezeTableName: true,
};

module.exports = { schema, utils };