
//Variable que se le asigna la lista games que corresponde a los partidos de la primera ronda del torneo
let currentGames = games 

//Función para asignar un punto random a uno de los jugadores de un partido mientras no hay ganador
function randomMatch(match) {
    while (match.getWinner() === null){
        const randomPoint = Math.floor(Math.random() * 2) + 1
        match.pointWonBy(randomPoint)
    }
}

//Se recorren todas las rondas del torneo
for (let i=0; i<torunamentRounds; i++){

    //Se recorren todos los partidos de cada ronda del torneo y se asigna un punto random con la función anterior hasta que hay un ganador
    for (let i=0; i<currentGames.length; i++){
        console.log(`_________MATCH ${i} STARTS_________`)
        let match = currentGames[i]
        randomMatch(match)
    }

    //Cuando todos los partidos de la ronda han terminado y hay ganadores se crea la nueva ronda de partidos con los ganadores llamando a la función newGamesWithWinners y si quedan rondas se vuelve a entrar en el for
    currentGames = newGamesWithWinners(currentGames)

}