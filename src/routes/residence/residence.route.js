const residenceController = require('../../controllers/residence/residence.controller')

module.exports = (app) => {
    // Country API 
    app.post("/residence/add", residenceController.create);
    app.get("/residence_type/list", residenceController.get);

}