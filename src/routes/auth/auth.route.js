const authController = require('../../controllers/auth/auth.controller')

module.exports = (app) => {
    // Country API 
    app.post("/login", authController.post);

}