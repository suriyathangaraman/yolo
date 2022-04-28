const { Readable } = require('stream');

function bufferToStream(binary) {
    const readableInstanceStream = new Readable({
        read() {
            this.push(binary);
            this.push(null);
        }
    });

    return readableInstanceStream;

}

var errHandler = function (err) {
    //console.log(err);
    return err;
}

module.exports = {
    bufferToStream,
    errHandler
}