const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware");
const { encryptFunction, comparePassword } = require('../../../utils/encryptionAndDecryption');

let file = "admin.controller";



exports.create = async (req, res) => {
    try {
     
        req.body.password = await encryptFunction( req.body.pwd)
        const  results = await commonService.insertOne(db.adminModel, req.body);
        
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.post = async (req, res) => {
    try {
       
         const  results = await commonService.findOne(db.adminModel, {where:{email_Id: req.body.email_Id}});
         const validate = await comparePassword(results.password, req.body.pwd)
         if(validate){
            successRes(res, results, SUCCESS.LISTED);
         }else{
            errorRes(res, 'Password doesnt match', 'Password doesnt match, please check input', file);
         }
        
        
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}