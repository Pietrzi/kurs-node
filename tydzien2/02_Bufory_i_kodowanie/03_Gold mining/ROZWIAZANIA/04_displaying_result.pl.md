## Wyświetlenie wyniku

Ten fragment kodu korzysta z metody **Array.reduce()**, która jest niezwykle przydatna lecz nie intyicyjna. Dokumentacja znajduje się [tutaj](https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/Reduce). 

Możesz nie rozumieć jak reduce działa, nie martw się tym. To przyjdzie z czasem. Dlatego gotowa funkcja została pokazana w pliku ./resultParser.js

```javascript
// when readStream closes
readStream.on('close', () => {
    // log the result to the console
    console.log(parseResult(findings))
})

const parseResult = findings => {
    /* 
        new Set(array) creates a Set which holds unique values
        it's is turned back into an array
        so uniqueKeys holds an array with unique values from 'findings' array, e.g.

        let findings = ['john', 'john', 'mike', 'mike', 'mike']

        const uniqueKeys = Array.from(new Set(findings))

        console.log(uniqueKeys) // ['john', 'mike']
    */
    const uniqueKeys = Array.from(new Set(findings))

    /*
        we iterate over the unique keys and build an object
    */
    return uniqueKeys.reduce((acc, curr) => {
        const occurances = () => findings.filter(item => item === curr).length

        return {
            ...acc,
            [`${curr}`]: occurances()
        }
    }, {})
}
```