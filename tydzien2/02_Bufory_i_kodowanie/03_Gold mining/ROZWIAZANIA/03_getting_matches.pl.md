## Wyszukiwanie pasujących fragmentów

```javascript
// declare an array for result
let findings = []

readStream.on('data', data => {
    /*
    const utf = data.toString()
    const bufferFromBase64 = Buffer.from(utf, 'base64')
    const encodedUtf8 = bufferFromBase64.toString('utf-8')
    */

    // the .match(regex) method returns an array of matches
    // then we pushe the matches into the findings array
    findings.push(...encodedUtf8.match(/{([^}]*)}/g))
})

```