var express = require('express')
var app = express()
var Connection = require('./connect')

app.use( express.json() )


app.get('/', function (req, res) {
    let data = {
        'name': req.query.name,
        'age': req.query.age,
    }
    res.send(data)
 })

 app.post('/', function(req, res){
    let conn = new Connection()
    let result = conn.getPokemons()
    console.log(result)
    res.send(result)
 })
 
 var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
    
    console.log("Example app listening at http://%s:%s", host, port)
 })