const http = require('http')

const server = http.createServer(async (req, res) => {
    if (req.method === 'GET' && req.url === '/user') {
        res.end('Server received a GET request to path /user')
    }
    if (req.method === 'GET') {
        res.end('Server received a GET request')
    }
    if (req.method === 'POST') {
        res.end('Server received a POST request')
    }
    if (req.method === 'PUT') {
        res.end('Server received a PUT request')
    }
    if (req.method === 'PATCH') {
        res.end('Server received a PATCH request')
    }

    res.end()
})

server.listen(8080, () => {
    console.log('Listening on port 8080')
})
