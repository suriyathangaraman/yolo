const stateController = require('../../controllers/state/state.controller')

module.exports = (app) => {
    // Country API 
    app.post("/state/add", stateController.create);
    app.get("/state", stateController.get);

}