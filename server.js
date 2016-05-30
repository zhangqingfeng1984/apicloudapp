var http = require('http');
var fs = require('fs');

var app = http.createServer(function(req, res){
    var html = fs.readFileSync('./index.html', {encoding:'utf-8'});
    res.end(html)
});

app.listen(9098);

console.log('zhuge server started at 9098');