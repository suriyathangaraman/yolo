const propertyController = require('../../controllers/property/property.master.controller')

module.exports = (app) => {
    // Country API 
    app.post("/property/add", propertyController.propertyCreate);
    app.post("/property/map", propertyController.propertyMap);
    app.get("/property/list", propertyController.propertyGet);

}