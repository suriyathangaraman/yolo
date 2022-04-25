const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const bcrypt = require ('bcrypt');
const saltRounds = 10;

let file = "guest_master.controller";


const encryptFunction = async (password) =>{
    const hassedPass = bcrypt.hashSync(password, saltRounds, function(err, hash) {
       
        if(err){
            throw err
        }

        console.log('I am has value ', hash)
        return hash
    });

    return hassedPass
}

const comparePassword = async (hashedPassword, password) =>{
    bcrypt.compare(password, hashedPassword, function(err, result) {
        if (result) {
          console.log("It matches!")

          return true;
        }
        else {
          console.log("Invalid password!");

          return false;
        }
      });
}


exports.create = async (req, res) => {
    try {

        req.body.password = await encryptFunction(req.body.pwd)
        const results = await commonService.insertOne(db.guest_master_model, req.body)
        if(results){
            req.body.guest_Id = results.guest_Id
            await commonService.insertOne(db.guest_cred_master_model, req.body)
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