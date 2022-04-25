const areaController = require('../../controllers/area/area.controller')

module.exports = (app) => {
    // Country API 
    app.post("/area/add", areaController.create);
    app.get("/area", areaController.get);

}