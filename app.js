var localconfig = require('./localconfig');
var express = require('express');
var mongojs = require('mongojs');

var app = express();
var db=mongojs(localconfig.connection_url, ['products']);

app.get('/', function(req, res){
    res.send('It Works!');
});

app.get('/products', function(req, res){
    console.log('Fetching Products...');
    db.products.find(function(err, docs){
        if(err){
            res.send(err);
        } else {
            console.log('Sending Products...');
            res.json(docs);
        }
    });
});

app.get('/products/:id', function(req, res){
    console.log('Fetching Product...');
    db.products.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, doc){
        if(err){
            res.send(err);
        } else {
            console.log('Sending Product...');
            res.json(doc);
        }
    });
});


app.listen(3000);
console.log('Server is running on port 3000...')