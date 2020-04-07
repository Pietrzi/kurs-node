const http = require('http')
const axios = require('axios')

const alpha = http.createServer(async (req, res) => {
    // your code goes here

})

const omega = http.createServer(async (req, res) => {
    // your code goes here
})

alpha.listen(8000, console.log('Alpha listening'))
omega.listen(9000, console.log('Omega listening'))