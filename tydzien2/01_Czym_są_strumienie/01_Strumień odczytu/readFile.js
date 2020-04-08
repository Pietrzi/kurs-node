const fs = require('fs')

const source = __dirname + '/source.txt'

let count = 0

fs.readFile(source, (_err, data) => {
    count++
    //console.log(data)
    console.log(`Load to memory count: ${count}`)
})

