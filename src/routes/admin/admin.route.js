const adminController = require('../../controllers/admin/admin.controller')

module.exports = (app) => {
    // Country API 
    app.post("/admin/add", adminController.create);
    app.post("/admin/login", adminController.post);

}