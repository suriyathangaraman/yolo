const s3Upload = require('../../../utils/s3upload');
const { successRes, errorRes } = require("../../middlewares/response.middleware")
const { ERRORS, SUCCESS, Op } = require("../../helpers/index.helper");
let file = "s3upload.router";


module.exports = (app) => {
    // Country API 
    app.post("/upload", async function (req, res) {

        try {
            var dateObj = new Date().toLocaleDateString().split('/');
            console.log('req.files', req.files.files);
            console.log('req.files', Array.isArray(req.files.files))
            var filename = process.env.NODE_ENV + "/userupload/" + dateObj.join('') + "/" + req.files.files.name.replace(' ', '').replace(' ', '').replace(' ', '').replace(' ', '').replace('%20', '').replace('%20', '');
            var s3upl = await s3Upload.fileuploadtoS3(filename,req);
        
            if(s3upl.status == true){

                successRes(res, s3upl, SUCCESS.UPLOADED);
            }else{
                errorRes(res, 'Couldnt able to upload the give file', 'Couldnt able to upload the give file', file);
            }
          
          
        } catch (error) {
            errorRes(res, error, 'Couldnt able to upload the give file', file);
        }
    });
   

}