const logger = require('../../utils/logger');

let successRes = function successValue(res, results, message) {
    return res.status(200).send({ status: 200, results: results, message: message });
};

let errorRes = function errorValue(res, error, message, file) {
    logger.log('error', error, message, file);
    return res.status(400).send({ status: 400, message: message });

};

let commonSuccessRes = function successValue(res, success) {
    return res.status(success.statusCode).send({ status: success.statusCode, message: success.message, results: success.results });
}

let commonErrorRes = function errorValue(res, errors) {
    return res.status(errors.statusCode).send({ status: errors.statusCode, message: errors.message });
}

module.exports = { successRes, errorRes, commonErrorRes, commonSuccessRes };