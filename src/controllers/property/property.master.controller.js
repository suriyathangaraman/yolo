const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const  {encryptFunction} = require('../../../utils/encryptionAndDecryption');
const { Sequelize } = require("sequelize");

let file = "property_master.controller";


exports.propertyCreate = async (req, res) => {

    try {

        const results = await commonService.insertOne(db.propertyMasterModel, req.body);

        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {

        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.propertyMap = async (req, res) => {

    const t = await db.sequelize.transaction();

    try {         
        
        const result = await db.sequelize.transaction(async (t) => {

            await db.propertyImagesModel.bulkCreate(req.body.propertyImages, { transaction: t });
            await db.propertyVideosModel.bulkCreate(req.body.propertyVideos, { transaction: t });
            await db.propertyFacilityModel.bulkCreate(req.body.propertyFacilities, { transaction: t });
            const categoryResult = await db.propertyCategoryModel.bulkCreate(req.body.propertyCategories, { transaction: t });

          //  await t.commit();

            return categoryResult;
        });

        await t.commit();



        successRes(res, result, SUCCESS.CREATED);
    } catch (error) {

        await t.rollback();

        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.propertyGet = async (req, res) => {
    try {
        let query = {};
        query.where = req.query;
        query.attributes = {}
        let results;
        if (req.query && req.query.guest_Id) {
            results = await commonService.findOne(db.propertyMasterModel, query);
        } else {
            results = await commonService.findAll(db.propertyMasterModel, query);
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}