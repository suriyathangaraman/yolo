const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")

let file = "state.controller";



exports.create = async (req, res) => {
    try {
        let query = req.body;
        let results;
        if (query && query.length > 0) {
            results = await commonService.insertMany(db.stateModel, query);
        } else {
            results = await commonService.insertOne(db.stateModel, query);
        }
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.get = async (req, res) => {
    try {
        let query = {};
        query.where = req.query;
        query.attributes = {}
        let results;
        if (req.query && req.query.state_Id) {
            results = await commonService.findOne(db.stateModel, query);
        } else {
            results = await commonService.findAll(db.stateModel, query);
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}