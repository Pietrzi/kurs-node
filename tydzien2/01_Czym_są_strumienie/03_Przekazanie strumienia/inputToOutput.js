const fs = require('fs');

const input = __dirname + '/target.txt';
const readStream = fs.createReadStream(input);
const writeStream = fs.createWriteStream(__dirname + '/output.txt');
let stuff;

readStream.on('data', data => {
    writeStream.write(data);
})





// writeStream.on('open', data => {
//     console.log(data);
// })

// writeStream.write(stuff);