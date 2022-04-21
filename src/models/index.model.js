const {countryModel} = require('./country/country.model');
const {stateModel} = require('./state/state.model');

let schema = [];

 schema.push(
  {model: "countryModel", table: "country_master", path: countryModel},
  {model: "stateModel", table: "state_master", path: stateModel}
); 

let utils = {
  paranoid: true,
  underscored: true,
  freezeTableName: true,
};

module.exports = { schema, utils };