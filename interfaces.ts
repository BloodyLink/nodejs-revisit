interface Game {
    name: string;
    releaseDate: string;
    players: number;
    developer: string;
    publisher: string;
}

function showGame(game: Game){
    let message = `
    Name: ${game.name}
    Release date: ${game.releaseDate}
    Players: ${game.players}
    Developer: ${game.developer}
    Publisher: ${game.publisher}
    `;

    return message;
}

let newGame = {
    name: 'Persona 5',
    releaseDate: '17-03-2018',
    players: 1,
    developer: 'Atlus',
    publisher: 'Atlus',
}

console.log(showGame(newGame));