const fs = require('fs');

/* 
    Comment out line 15 to see what the chunk looks like
*/

const source = __dirname + '/source.txt'
const readStream = fs.createReadStream(source);

let count = 0

readStream.on('data', (data) => {
    count ++

    console.log(data)
})

readStream.on('close', () => {
    console.log(`Load to memory count: ${count}`)
    console.log('Streaming finished.')
})

readStream.on('open', () => {
    console.log('Streaming started.')
})