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
        console.log(`
            Name: ${this.name}
            Type: ${this.type}
            Moves: ${this.moves} 
        `);
    }
}

var pokemon = new Pokemon('Blastoise', ['Water'], ['Hydro pump', 'Withdraw', 'Tackle']);

pokemon.show();