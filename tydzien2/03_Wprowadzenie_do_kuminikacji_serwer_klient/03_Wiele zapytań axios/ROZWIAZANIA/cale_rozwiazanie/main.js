const http = require('http')
const axios = require('axios')

const Alpha = http.createServer(async (_req, res) => {
    const [resBravo, resCharlie, resDelta] = await Promise.all([
        axios.get('http://localhost:6000'),
        axios.get('http://localhost:7000'),
        axios.get('http://localhost:8000')
    ])

    res.end(JSON.stringify({
        bravo: resBravo.data,
        charlie: resCharlie.data,
        delta: resDelta.data
    }))

})

const Bravo = http.createServer((_req, res) => {
    const response = {
        message: `Hello from Bravo`,
        timestamp: Date.now()
    }

    res.end(JSON.stringify(response))
})

const Charlie = http.createServer((_req, res) => {
    const response = {
        message: `Hello from Charlie`,
        timestamp: Date.now()
    }

    res.end(JSON.stringify(response))

})

const Delta = http.createServer((_req, res) => {
    const response = {
        message: `Hello from Delta`,
        timestamp: Date.now()
    }

    res.end(JSON.stringify(response))
})

Alpha.listen(5000, console.log('Alpha listening'))
Bravo.listen(6000, console.log('Bravo listening'))
Charlie.listen(7000, console.log('Charlie listening'))
Delta.listen(8000, console.log('Delta listening'))


