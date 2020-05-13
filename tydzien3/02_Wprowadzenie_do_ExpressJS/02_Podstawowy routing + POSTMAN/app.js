const express = require( 'express' );
 
const app = express();

app.get('/', (req, res) => {

    console.log(req.url);

    res.send("Hello main");
    res.end();

});



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