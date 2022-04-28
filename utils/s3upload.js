
var AWS = require('aws-sdk');
AWS.config.region = 'ap-south-1';

const utils = require('./bufferToStream');


async function fileuploadtoS3(fileName,req) {

    var outJson = { status: false, filePath: "" };

    var s3 = new AWS.S3({
        apiVersion: '2022-04-28', accessKeyId: 'AKIA342PZNP47UT6CLZN',
        secretAccessKey: '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'
    });

    const s3params = {
        Bucket: 'yolos3bucket',
        Key: fileName, // File name you want to save as in S3
        Body: utils.bufferToStream(req.files.files.data),
        ACL: 'public-read'

    };

    return new Promise(function (resolve, reject) {
        s3.upload(s3params, async function (err, s3data) {
            console.log("s3 response",err,s3data);
            if (err) {
                resolve(outJson);
            }
            outJson.status = true;
            outJson.filePath = s3data.Location;
            resolve(outJson);
        });
    }).catch(function(error) {
        throw error;
    })

    // Uploading files to the bucket
   
}

module.exports = {
    fileuploadtoS3
}