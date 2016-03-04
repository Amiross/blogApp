var express = require('express');
var app = express();
var path = require('path');

app.set('port',8080);
app.use(express.static(path.join(__dirname, '/../')));

var fs = require('fs');


app.get('/getData',function(req,res) {
    fs.readFile('../data/posts.json', 'utf8', function (err, data) {
        if (err) {throw err}
        //return postData = data;
        res.send(data);
    });

});

var logger = require('morgan');
app.use(logger('dev'));


app.listen(app.get('port'), function () {
    console.log('listening on port 8080!');
});
