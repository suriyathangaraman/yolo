const facilityController = require('../../controllers/facility/facility.controller')

module.exports = (app) => {
    // Country API 
    app.post("/facility/add", facilityController.create);
    app.get("/facility/list", facilityController.get);

}