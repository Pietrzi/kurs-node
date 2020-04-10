const http = require('http')
const axios = require('axios')

const alpha = http.createServer(async (req, res) => {
    // your code goes here

    console.log("URL", req.url)

    if(req.url !== '/testservers') {
        res.write("Hola hola")
        res.end();
        return;
    }

    let data = []

    try {
        data = await axios
        .all([axios.get('http://localhost:6000', {
            headers: { "name": "bravo" }
        }),axios.get('http://localhost:9000',{
            headers: { "name": "charlie" }
        }),axios.get('http://localhost:8000', {
            headers: { "name": "delta" }
        })])
    } catch (error) {
        console.error(error)
    }


    res.write(JSON.stringify(data.map((x) => {
        return x.data
    })))

    res.end();


});

const bravo = http.createServer(async (req, res) => {
    // your code goes here
    res.write(JSON.stringify({[req.headers.name]: {message: `Hi i'm ${req.headers.name}`, timestamp: new Date().getTime()}}))
    res.end();

});

const charlie = http.createServer(async (req, res) => {
    // your code goes here
    res.write(JSON.stringify({[req.headers.name]: {message: `Hi i'm ${req.headers.name}`, timestamp: new Date().getTime()}}))
    res.end();

});

const delta = http.createServer(async (req, res) => {
    // your code goes here
    res.write(JSON.stringify({[req.headers.name]: {message: `Hi i'm ${req.headers.name}`, timestamp: new Date().getTime()}}))
    res.end();

});

axios.get('http://localhost:5000/testservers')
.then((res) => {
    console.log(res.data)
})
.catch(err => console.error(error))

alpha.listen(5000, console.log('Alpha listening'))
bravo.listen(6000, console.log('Alpha listening'))
charlie.listen(9000, console.log('Alpha listening'))
delta.listen(8000, console.log('Alpha listening'))