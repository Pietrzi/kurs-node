const fs = require('fs')
const readStream = fs.createReadStream(__dirname + '/input')

let findings = []

readStream.on('data', data => {
    const utf = data.toString()
    const bufferFromBase64 = Buffer.from(utf, 'base64')
    const encodedUtf8 = bufferFromBase64.toString('utf-8')

    findings.push(...encodedUtf8.match(/{([^}]*)}/g))
})

readStream.on('close', () => {
    console.log(parseResult(findings))
})

const parseResult = findings => {
    const uniqueKeys = Array.from(new Set(findings))

    return uniqueKeys.reduce((acc, curr) => {
        const occurances = () => findings.filter(item => item === curr).length

        return {
            ...acc,
            [`${curr}`]: occurances()
        }
    }, {})
}

/*
    result:
    { '{nothing interesting}': 4, '{gold}': 4, '{silver}': 4 }
*/