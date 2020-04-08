## Konwersja z base64 do utf-8

```javascript
readStream.on('data', data => {
    /*
        data is a Buffer, binary data.
        That being the case, we convert it to string

        variable utf holds a value similar to this:

        TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4g
        RG9uZWMgdXQgc2NlbGVyaXNx
    */

    const utf = data.toString('utf-8')

    // then we need to make binary data from it with base64 encoding
    const bufferFromBase64 = Buffer.from(utf, 'base64')

    /*
        then we covert this binary to string with utf-8 encoding
        the result is:

        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Morbi consequat lectus a erat venenatis feugiat. Nulla sit

    */
    const encodedUtf8 = bufferFromBase64.toString('utf-8')
})

```

