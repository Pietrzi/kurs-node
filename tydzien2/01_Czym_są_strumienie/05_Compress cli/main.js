// source target action
const fs = require('fs');
const { createGzip, createGunzip } = require('zlib');
const { pipeline } = require('stream');
const { promisify } = require('util');
const pipe = promisify(pipeline);
const source = process.argv[2];
const target = process.argv[3];
const action = process.argv[4];

const createGzipFile = async (input, output) => {
    const gzip = createGzip();
    const source = fs.createReadStream(input);
    const destination = fs.createWriteStream(output);

    var size = 0;
    var wholeSize = fs.statSync( input ).size

    source.on('data', function(data){
        size+= data.byteLength
        console.warn("Percentage", `${size / wholeSize * 100} %` )
    });

    await pipe(source, gzip, destination);

}

const decompressFile = async (input, output) => {
    const gzip = createGunzip();
    const source = fs.createReadStream(input);
    const destination = fs.createWriteStream(output);

    var size = 0;
    var wholeSize = fs.statSync( input ).size

    source.on('data', function(data){
        size+= data.byteLength
        console.warn("Percentage", `${size / wholeSize * 100} %` )
    });

    await pipe(source, gzip, destination);
}

if(
    source && fs.existsSync(source) &&
    ['compress', 'decompress'].includes(action)
) {

    if(action === 'compress') {
        createGzipFile(source, target);
        return
    } 

    decompressFile(source, target);

}