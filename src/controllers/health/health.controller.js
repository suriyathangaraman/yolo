const { successRes, errorRes } = require("../../middlewares/response.middleware")
const {  ERRORS, SUCCESS } = require("../../helpers/index.helper");

exports.healthApiController = async (req, res) => {
    try {
        
        const results = 'Application works fine'
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}

