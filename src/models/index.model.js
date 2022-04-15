const countryModel = require('./country/country.model');

let schema = [];

 schema.push(
  {model: "countryModel", table: "countries", path: countryModel}
); 

let utils = {
    paranoid: true,
    underscored: true
};

module.exports = { schema, utils };