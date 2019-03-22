class Pokemon {

    name: string;
    type: string[];
    moves: string[];

    constructor(name: string, type: string[], moves: string[]){
        this.name = name;
        this.type = type;
        this.moves = moves;
    }

    show(): void{
        let data = {
            "name": this.name,
            "type": this.type,
            "moves": this.moves
        }
        console.table(data);
    }
}

var pokemon = new Pokemon('Blastoise', ['Water'], ['Hydro pump', 'Withdraw', 'Tackle']);

pokemon.show();