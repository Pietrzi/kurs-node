## Stworzenie serwerów http

```javascript
const http = require('http')

const Alpha = http.createServer(async (_req, res) => {})

const Bravo = http.createServer((_req, res) => {})

const Charlie = http.createServer((_req, res) => {})

const Delta = http.createServer((_req, res) => {})

Alpha.listen(5000, console.log('Alpha listening'))
Bravo.listen(6000, console.log('Bravo listening'))
Charlie.listen(7000, console.log('Charlie listening'))
Delta.listen(8000, console.log('Delta listening'))
```