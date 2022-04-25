const app = require('express')();

require("./health/health.route")(app);
require("./country/country.route")(app);
require('./state/state.route')(app)



module.exports = app;

