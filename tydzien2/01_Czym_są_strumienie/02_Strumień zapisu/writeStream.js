const fs = require('fs')

const target = __dirname + '/target.txt'
const writeStream = fs.createWriteStream(target)
const yourCustomMessage = 'Initial text. And what else..'

writeStream.on('open', (data) => {
    console.log('I received some data to process..')
    console.log(data)
})

writeStream.write(yourCustomMessage)

