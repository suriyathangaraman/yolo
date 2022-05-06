const db = require('../../models');
const commonService = require("../../services/commonService");
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
const { successRes, errorRes } = require("../../middlewares/response.middleware")

let file = "residence.controller";



exports.create = async (req, res) => {
    try {
        let query = req.body;
        let results;
        if (query && query.length > 0) {
            results = await commonService.insertMany(db.residenceTypeModel, query);
        } else {
            results = await commonService.insertOne(db.residenceTypeModel, query);
        }
        successRes(res, results, SUCCESS.CREATED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.addResidenceDetails = async (req, res) => {

        const t = await db.sequelize.transaction();
    
        try {         
            
            const result = await db.sequelize.transaction(async (t) => {

                const residenceInfo = await db.residenceMasterModel.create(req.body.residenceDetail, { transaction: t });

                const residenceFacilities = await this.addResidenceId(req.body.residenceFacilities, residenceInfo.residence_Id);
                const residenceImages = await this.addResidenceId(req.body.residenceImages, residenceInfo.residence_Id);
                const residenceVideos = await this.addResidenceId(req.body.residenceVideos, residenceInfo.residence_Id);
                const residenceRooms = await this.addResidenceId(req.body.residenceRooms, residenceInfo.residence_Id);

                await db.residenceFacilityModel.bulkCreate(residenceFacilities, { transaction: t });
                await db.residenceImagesModel.bulkCreate(residenceImages, { transaction: t });
                await db.residenceVideosModel.bulkCreate(residenceVideos, { transaction: t});
                await db.roomMasterModel.bulkCreate(residenceRooms,  { transaction: t});

                   
                return residenceInfo;
            });
    
            await t.commit();
    
            successRes(res, result, SUCCESS.CREATED);
        } catch (error) {
    
            await t.rollback();
    
            const message = error.message ? error.message : ERRORS.CREATED;
            errorRes(res, error, message, file);
        }
    }

exports.addResidencePriceDetails = async(req, res) => {

    const t = await db.sequelize.transaction();

    try {

        const result = await db.sequelize.transaction(async (t) => {

            const residencePriceInfo = await db.residencePriceMasterModel.create(req.body.priceInfo, { transaction: t });

            const priceDetails = await this.prepareRoomPriceDetail(req.body.roomInfo, residencePriceInfo.residence_price_Id);

            await db.residencePriceDetailsModel.bulkCreate(priceDetails , { transaction: t });

            return residencePriceInfo;
        });

        await t.commit();
            
        successRes(res, result, SUCCESS.CREATED);
    }catch (error){
        await t.rollback();
    
        const message = error.message ? error.message : ERRORS.CREATED;
        errorRes(res, error, message, file);
    }
}

exports.addResidenceId = async(arr, residenceId) => {

    const array = arr;
    
    array.forEach(element => {
        element.residence_Id = residenceId;
    });

    console.log(array)

    return array;
}

exports.prepareRoomPriceDetail = async(rooms, priceId) => {

    const priceDetails = [];

    for(const element of rooms) {

        priceDetails.push({room_Id: element.room_Id, residence_price_Id: priceId, status: 1});
    }

    return priceDetails;
}
    

exports.get = async (req, res) => {
    try {
        let query = {};
        query.where = req.query;
        query.attributes = {}
        let results;
        if (req.query && req.query.city_Id) {
            results = await commonService.findOne(db.residenceTypeModel, query);
        } else {
            results = await commonService.findAll(db.residenceTypeModel, query);
        }
        successRes(res, results, SUCCESS.LISTED);
    } catch (error) {
        const message = error.message ? error.message : ERRORS.LISTED;
        errorRes(res, error, message, file);
    }
}