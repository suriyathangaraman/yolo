const healthController = require('../../controllers/health/health.controller')

module.exports = (app) => {
    // Health Check API 
    app.get("/healthcheck", healthController.healthApiController);

}