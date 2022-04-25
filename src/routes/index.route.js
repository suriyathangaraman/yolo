const app = require('express')();

require("./health/health.route")(app);
require("./country/country.route")(app);
require('./state/state.route')(app);
require('./city/city.route')(app);
require('./area/area.route')(app);


module.exports = app;

