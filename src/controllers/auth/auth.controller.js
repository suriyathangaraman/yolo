const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const bcrypt = require ('bcrypt');
const saltRounds = 10;

let file = "auth.controller";


const comparePassword = async (hashedPassword, password) =>{
  
  return   bcrypt.compareSync(password, hashedPassword, function(err, result) {
        
    if(err){
        throw err
    }
    
    return result
    });
}



exports.post = async (req, res) => {
    try {
        let query = {};
        query.where = req.query;
        query.attributes = {}
        let results;
        if (req.query) {
            results = await commonService.findOne(db.guest_master_model, query);
            let newQuery = {}
            newQuery.where = {guest_Id:results.guest_Id};
            const credDetails = await commonService.findOne(db.guest_cred_master_model, newQuery);

            const hashRes = await comparePassword(credDetails.password, req.body.pwd);

            if(!hashRes){
                throw "Invalid Password"
            }
        }else{
            throw "Invalid Input"
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}