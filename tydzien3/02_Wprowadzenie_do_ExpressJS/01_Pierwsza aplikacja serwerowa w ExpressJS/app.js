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


app.post('/about', function(req, res){
    res.send("Hello about");
    res.end();  
})

app.get('/about', function(req, res){
    res.send("Hello about");
    res.end();
})

app.put('/about', function(req, res){
    res.send("Hello about");
    res.end();
})


app.delete('/about', function(req, res){
    res.send("Hello about");
    res.end();
})


app.post('/contact', function(req, res){
    res.send("Hello contact");
    res.end();  
})

app.get('/contact', function(req, res){
    res.send("Hello contact");
    res.end();
})

app.put('/contact', function(req, res){
    res.send("Hello contact");
    res.end();
})


app.delete('/contact', function(req, res){
    res.send("Hello contact");
    res.end();
})

app.listen(3000, function(){
    console.log('Listening on port 3000');
});