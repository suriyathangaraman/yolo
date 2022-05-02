const residenceController = require('../../controllers/residence/residence.controller')

module.exports = (app) => {
    // Country API 
    app.post("/residence/add_residence_type", residenceController.create);
    app.get("/residence/type/list", residenceController.get);
    app.post("/residence/create_residence", residenceController.addResidenceDetails);
    app.post("/residence/add_price_details", residenceController.addResidencePriceDetails);

}