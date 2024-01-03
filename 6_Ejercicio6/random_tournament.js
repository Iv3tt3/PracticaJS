let currentGames = games 

function randomMatch(match) {
    while (match.getWinner() === null){
        const randomPoint = Math.floor(Math.random() * 2) + 1
        match.pointWonBy(randomPoint)
    }
}


for (let i=0; i<torunamentRounds; i++){
    for (let i=0; i<currentGames.length; i++){
        console.log(`_________MATCH ${i} STARTS_________`)
        let match = currentGames[i]
        randomMatch(match)
    }

    currentGames = newGamesWithWinners(currentGames)

}