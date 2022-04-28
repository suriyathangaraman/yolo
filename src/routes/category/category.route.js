const categoryController = require('../../controllers/category/category.controller')

module.exports = (app) => {
    // Country API 
    app.post("/category/add", categoryController.create);
    app.get("/category/list", categoryController.get);

}