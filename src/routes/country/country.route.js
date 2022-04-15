const countryController = require('../../controllers/country/country.controller')

module.exports = (app) => {
    // Country API 
    app.post("/country/add", countryController.create);
    app.get("/country", countryController.get);

}