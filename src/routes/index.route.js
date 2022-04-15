const app = require('express')();

require("./health/health.route")(app);



module.exports = app;

