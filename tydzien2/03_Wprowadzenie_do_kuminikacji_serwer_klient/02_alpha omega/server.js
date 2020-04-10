const http = require('http')
const axios = require('axios')

const alpha = http.createServer(async (req, res) => {
    // your code goes here

    console.log(req.headers.authorization);

    if(req.headers.authorization === 'a-secret-key') {
        axios.get('http://localhost:9000', {
            headers: {
                "Authorization": "a-secret-key"
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    res.write("Cokolwiek");
    res.end();

})

const omega = http.createServer(async (req, res) => {
    // your code goes here

    if(req.headers.authorization === 'a-secret-key'){
        res.write(JSON.stringify({
            firstName: 'Fred',
            lastName: 'Flintstone',
            kids: [{
                name: 'Joanna',
                age: 12,
                married: true,
                spouse: {
                    name: 'Jan'
                }
            }]
        }))


        res.end();
    }

    
})

axios.get('http://localhost:8000', {
    headers: {
        "Authorization": "a-secret-key"
    }
})
    .then(res => {
        console.log(res.data)
    })
    .catch(error => {
        console.error(error)
    })


alpha.listen(8000, console.log('Alpha listening'))
omega.listen(9000, console.log('Omega listening'))