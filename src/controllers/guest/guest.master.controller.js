const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const  {encryptFunction} = require('../../../utils/encryptionAndDecryption')

let file = "guest_master.controller";


exports.create = async (req, res) => {

    let guest_Id = '';
    try {

        req.body.password = await encryptFunction(req.body.pwd)
        const results = await commonService.insertOne(db.guest_master_model, req.body)
        if(results){
            req.body.guest_Id = results.guest_Id
            guest_Id= results.guest_Id
            await commonService.insertOne(db.guest_cred_master_model, req.body)
        }
        
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        if(guest_Id){
            await commonService.delete(db.guest_master_model, {where:{guest_Id}})
        }
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
        if (req.query && req.query.guest_Id) {
            results = await commonService.findOne(db.guest_master_model, query);
        } else {
            results = await commonService.findAll(db.guest_master_model, query);
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}