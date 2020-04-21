const express = require( 'express' );
const path = require('path');
 
const app = express();

app.get('/', (req, res) => {

    console.log(req.url);

    res.send("Hello yourself\n");
    res.end();

});

app.post('/test', function(req, res){
    console.log(req.method, req.url);
    res.json({
        method: req.method,
        url: req.url
    })
})

app.get('/test', function(req, res){
    console.log(req.method, req.url);
    res.json({
        method: req.method,
        url: req.url
    })
})

app.put('/test', function(req, res){
    console.log(req.method, req.url);
    res.json({
        method: req.method,
        url: req.url
    })
})
;

app.delete('/test', function(req, res){
    console.log(req.method, req.url);
    res.json({
        method: req.method,
        url: req.url
    })
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
});