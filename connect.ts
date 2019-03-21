var mysql = require('mysql')


module.exports = class Connection {
    con: any

    constructor(){
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "test_node",
        })
    }

    connect(): void{
        this.con.connect(function(err){
            if (err) throw err
            console.log('Connected!')
        })
    }

    getPokemons(): any{
        var pokemons: any
        this.con.query("SELECT * FROM pokemons", function(err, result, fields){
            if (err) throw err
            pokemons = JSON.stringify(result)
        })
        console.log(pokemons)
        // return pokemons
    }
}
