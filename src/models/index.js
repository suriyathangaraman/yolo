const Sequelize = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME,process.env.PASSWORD, {
    
  host: process.env.DB_HOST,
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  logging: false,
  define: {
    timestamps: true,
    freezeTableName: true,
    underscored: true,
  },

});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.countryModel = require('./country/country.model')(sequelize, Sequelize);
db.stateModel = require('./state/state.model')(sequelize, Sequelize);
db.cityModel = require('./city/city.model')(sequelize, Sequelize);
db.areaModel = require('./area/area.model')(sequelize, Sequelize);
db.guest_master_model = require('./guest/guest_master.model')(sequelize, Sequelize)
db.guest_cred_master_model = require('./guest/guest_credential.model')(sequelize, Sequelize);
db.adminModel = require('./admin/admin.model')(sequelize, Sequelize);
db.facilityModel = require('./facility/facility.model')(sequelize, Sequelize);
db.categoryModel = require('./category/category.model')(sequelize, Sequelize);

db.residenceTypeModel = require('./residence/residence_type.model')(sequelize, Sequelize);

db.propertyMasterModel = require('./property/property_master.model')(sequelize, Sequelize);
db.propertyImagesModel = require('./property/property_images.model')(sequelize, Sequelize);
db.propertyVideosModel = require('./property/property_videos.model')(sequelize, Sequelize);
db.propertyCategoryModel = require('./property/property_category.model')(sequelize, Sequelize);
db.propertyFacilityModel = require('./property/property_facility.model')(sequelize, Sequelize);


db.residenceMasterModel = require('./residence/residence_master.model')(sequelize, Sequelize);
db.residenceFacilityModel = require('./residence/residence_facility.model')(sequelize, Sequelize);
db.residenceImagesModel = require('./residence/residence_images.model')(sequelize, Sequelize);
db.residenceVideosModel = require('./residence/residence_videos.model')(sequelize, Sequelize);
db.roomMasterModel = require('./residence/room_master.model')(sequelize, Sequelize);
db.residencePriceMasterModel = require('./residence/residence_price_master.model')(sequelize, Sequelize);
db.residencePriceDetailsModel = require('./residence/residence_price_details.model')(sequelize, Sequelize);




db.countryModel.hasOne(db.stateModel, {foreignKey: 'country_Id'});
db.stateModel.belongsTo(db.countryModel, {foreignKey: 'country_Id'});

db.stateModel.hasOne(db.cityModel, { foreignKey: 'state_Id'});
db.cityModel.belongsTo(db.stateModel, { foreignKey: 'state_Id'});

db.cityModel.hasOne(db.areaModel, {foreignKey: 'city_Id'});
db.areaModel.belongsTo(db.cityModel, { foreignKey: 'city_Id'});

db.areaModel.hasMany(db.guest_master_model, {foreignKey: 'area_Id'});
db.guest_master_model.belongsTo(db.areaModel, {foreignKey: 'area_Id'})

db.guest_master_model.hasMany(db.guest_cred_master_model,{foreignKey: 'guest_Id'} );
db.guest_cred_master_model.belongsTo(db.guest_master_model, {foreignKey: 'guest_Id'})

db.categoryModel.hasMany(db.residenceTypeModel, {foreignKey: 'category_Id'});
db.residenceTypeModel.belongsTo(db.categoryModel, {foreignKey: 'category_Id'});

db.areaModel.hasMany(db.propertyMasterModel, {foreignKey: 'area_Id'});
db.propertyMasterModel.belongsTo(db.areaModel, { foreignKey: 'area_Id'});

db.propertyMasterModel.hasMany(db.propertyImagesModel, { foreignKey: 'property_Id'});
db.propertyImagesModel.belongsTo(db.propertyMasterModel, { foreignKey: 'property_Id'});

db.propertyMasterModel.hasMany(db.propertyVideosModel, { foreignKey: 'property_Id'});
db.propertyVideosModel.belongsTo(db.propertyMasterModel, { foreignKey: 'property_Id'});

db.categoryModel.hasMany(db.propertyCategoryModel, {foreignKey: 'category_Id'});
db.propertyCategoryModel.belongsTo(db.categoryModel, {foreignKey: 'category_Id'});

db.facilityModel.hasMany(db.propertyFacilityModel, { foreignKey: 'facility_Id'});
db.propertyFacilityModel.belongsTo(db.facilityModel, { foreignKey: 'facility_Id'});

db.propertyMasterModel.hasOne(db.propertyCategoryModel, { foreignKey: 'property_Id' });
db.propertyCategoryModel.belongsTo(db.propertyMasterModel, { foreignKey: 'property_Id' });

db.propertyMasterModel.hasOne(db.propertyFacilityModel, { foreignKey: 'property_Id' });
db.propertyFacilityModel.belongsTo(db.propertyMasterModel, { foreignKey: 'property_Id' });

db.residenceTypeModel.hasOne(db.residenceMasterModel, { foreignKey: 'residence_type_Id'});
db.residenceMasterModel.belongsTo(db.residenceTypeModel, { foreignKey: 'residence_type_Id'});

db.propertyCategoryModel.hasOne(db.residenceMasterModel, { foreignKey: 'property_category_Id'});
db.residenceMasterModel.belongsTo(db.propertyCategoryModel, { foreignKey: 'property_category_Id'});

db.facilityModel.hasMany(db.residenceFacilityModel, { foreignKey: 'facility_Id'});
db.residenceFacilityModel.belongsTo(db.facilityModel, { foreignKey: 'facility_Id'});

db.residenceMasterModel.hasMany(db.residenceFacilityModel, { foreignKey: 'residence_Id'});
db.residenceFacilityModel.belongsTo(db.residenceMasterModel, { foreignKey: 'residence_Id'});

db.residenceMasterModel.hasMany(db.residenceImagesModel, { foreignKey: 'residence_Id'});
db.residenceImagesModel.belongsTo(db.residenceMasterModel, { foreignKey: 'residence_Id'});

db.residenceMasterModel.hasMany(db.residenceVideosModel, { foreignKey: 'residence_Id'});
db.residenceVideosModel.belongsTo(db.residenceMasterModel, { foreignKey: 'residence_Id'});

db.residenceMasterModel.hasMany(db.residencePriceMasterModel, { foreignKey: 'residence_Id'});
db.residencePriceMasterModel.belongsTo(db.residenceMasterModel, { foreignKey: 'residence_Id'});

db.residenceMasterModel.hasMany(db.roomMasterModel, { foreignKey: 'residence_Id'});
db.roomMasterModel.belongsTo(db.residenceMasterModel, { foreignKey: 'residence_Id'});

db.residencePriceMasterModel.hasMany(db.residencePriceDetailsModel, { foreignKey: 'residence_price_Id'});
db.residencePriceDetailsModel.belongsTo(db.residencePriceMasterModel, { foreignKey: 'residence_price_Id'});

db.roomMasterModel.hasOne(db.residencePriceDetailsModel, { foreignKey: 'room_Id'});
db.residencePriceDetailsModel.belongsTo(db.roomMasterModel, { foreignKey: 'room_Id'});


module.exports = db;
