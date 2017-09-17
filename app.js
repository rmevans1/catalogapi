var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('It Works!');
});

app.listen(3000);
console.log('Server is running on port 3000...')