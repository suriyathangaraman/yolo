const guestController = require('../../controllers/guest/guest.master.controller')

module.exports = (app) => {
    // Country API 
    app.post("/guest/add", guestController.create);
    app.get("/guest", guestController.get);

}