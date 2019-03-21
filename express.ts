declare function require(name: string);
var express = require('express')
var mysql = require('mysql')
var app = express()

app.use( express.json() )

app.get('/', function (req, res) {
    let data = {
        'name': req.query.name,
        'age': req.query.age,
    }
    res.send(data)
 })

 app.post('/', function(req, res){
    res.send(req.body)
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })