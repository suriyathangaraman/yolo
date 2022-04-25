const cityController = require('../../controllers/city/city.controller')

module.exports = (app) => {
    // Country API 
    app.post("/city/add", cityController.create);
    app.get("/city", cityController.get);

}