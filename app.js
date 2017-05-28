var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs')
var app = express()
app.use(bodyParser.json())


app.get('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  res.send('Hello World!');
})


app.post('/', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin','*');
  var body = req.body;
  var json = JSON.stringify(body);
  fs.writeFile("file.json", json, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
});

  res.send('Hello World!');
})


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})