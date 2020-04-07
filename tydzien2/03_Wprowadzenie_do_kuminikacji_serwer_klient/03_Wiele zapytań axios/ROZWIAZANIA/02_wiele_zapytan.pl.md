## Alpha - wykonanie wielu zapytań Axios

W tym przykładzie jest użyty **Array destructuring**. Jest to jeden ze sposobów dostępu do obiektów znajdujących się pod kolejnymi kluczami w tablicy Spójrz na przykład poniżej:

```javascript
const [first, second, third] = ['Anna', 'Jan', true]

console.log(first) // Anna
console.log(second) // Anna
console.log(third) // true
```

Poniżej fragment dotyczący samego zadania:

```javascript
const Alpha = http.createServer(async (_req, res) => {
    /*
        Promise.all is used to perform many async actions
    */
    const [resBravo, resCharlie, resDelta] = await Promise.all([
        axios.get('http://localhost:6000'),
        axios.get('http://localhost:7000'),
        axios.get('http://localhost:8000')
    ])

    // the responses object needs to be turned to
    // a JSON before sending to client
        res.end(JSON.stringify({
        bravo: resBravo.data,
        charlie: resCharlie.data,
        delta: resDelta.data
    }))
})

```
