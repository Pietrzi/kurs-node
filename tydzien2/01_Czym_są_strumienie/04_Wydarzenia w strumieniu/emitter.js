const fs = require('fs')

const input = __dirname + '/input.txt'
const readStream = fs.createReadStream(input)

const output = __dirname + '/output.txt'
const writeStream = fs.createWriteStream(output)

// your code goes here ...

readStream
    .pipe(writeStream)