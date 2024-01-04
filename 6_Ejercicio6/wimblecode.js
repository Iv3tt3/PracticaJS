// Se pide al usuario el nº de jugadores del torneo. Solo admite numero de jugadores potencia de 2 y comprueba que sea un entero
let players = parseInt(prompt('Introduce el numero de jugadores del torneo:\nMínimo 4 jugadores. El número debe ser potencia de 2\n(Ej: 4, 8, 16, 32, 64, etc.)'))
const torunamentRounds = Math.log2(players)
while (torunamentRounds%1 !== 0 && !Number.isInteger(players)){
    players = prompt('El número no es válido. Introduce un número de jugadores potencia de 2. Mínimo 4 jugadores\n(Ej: 4, 8, 16, 32, 64, etc.)')
}

// Se pide el nombre de los jugadores. Se uas un índice para que el usuario diferencie los prompt 
let playerNames = []
while (playerNames.length !== players){
    let i = playerNames.length + 1
    let player = ""
    while (player === ""){
        player = prompt(`Introduce el nombre del jugador ${i}:`)
    }
    playerNames.push(player)
}

// Función que crea los partidos, los añade en la lista games y la retorna
function createPartners (players){
    let games = []
    while (players.length !== 0){
        let match = createMatch(players[0], players[1])
        games.push(match)
        players.shift()
        players.shift()
    }
    return games
}

// Llamamos a la función y creamos los partidos 
let games = createPartners(playerNames)

// Función para las posteriores rondas del torneo, crea los partidos con los ganadores de la ronda anterior del torneo.
function newGamesWithWinners (games){
    let gamesWinners = []
    let matchPlaying = false
    for (let i=0; i<games.length; i++){
        if (games[i].getWinner() === null){
            matchPlaying = true
        }
        gamesWinners.push(games[i].getWinner())
    }
    if (!matchPlaying && gamesWinners.length > 1) {
        console.log(`Nueva ronda. Los ganadores de los partidos anteriores son ${gamesWinners.join(" , ")}`)
        games = createPartners(gamesWinners)

    } else if (gamesWinners.length === 1 && gamesWinners[0] !== null){
        let winner = gamesWinners.join()
        console.log(`El ganador del torneo es ${winner}`)
    } else{console.log(`El torneo se está jugando`)}
    return games
}

// Función que crea el partido por parejas de jugadores
function createMatch (player1, player2) {
    let winner = null
    const points = [0, 15, 30, 40, 'win'];
    let deuce = false;
    let nextRound = false;
    let string = ""
    
    //Función que crea el objeto jugador
    const createPlayers = (player) => {
        const obj = {
            name: player,
            pointsPos: 0,
            points: 0,
            advantage: 0,
            rounds: 0,
            games: 0,
        }
        return obj
    }

    //Se crean las instancias del objeto con los jugadores del partido
    const players = [createPlayers(player1), createPlayers(player2)]
    string = `${players[0].name} ${players[0].points} - ${players[1].points} ${players[1].name}`

    //Función para actualizar si hay ganador del juego y del partido.
    const uploadGameScore = (player) => {
        if (players[0].rounds + players[1].rounds === 7){
            (players[0].rounds > players[1].rounds ? player = players[0] : player = players[1])
            player.games += 1
            string += `\nGame Winner: ${player.name}`
            players[0].rounds = players[1].rounds = 0
        }else if (player.rounds > 3 && Math.abs(players[0].rounds - players[1].rounds)>=2){
            player.games += 1
            string += `\nGame Winner: ${player.name}`
            players[0].rounds = players[1].rounds = 0
        }
        if (player.games === 2) {
            winner = player.name
            nextRound = false
            string += `\nMatch Winner: ${player.name}`
        }
    }  

    //Función para anunciar el ganador de la ronda y reiniciar marcadores. Llama a la función anterior
    const uploadRoundWinner = (player) => {
        deuce = false
        nextRound = true
        player.rounds += 1
        string = `Round winner: ${player.name}`
        // Reset data
        players[0].points = players[1].points = 0
        players[0].pointsPos = players[1].pointsPos = 0
        players[0].advantage = players[1].advantage = 0

        uploadGameScore(player)
    }

    // Función para actualizar los marcadores, anunciar si entran en Deuce o si hay un ganador de la ronda. Llama a la función anterior
    const uploadScores = (player) => {
        if (players[0].points === 40 && players[1].points === 40){
            if (deuce){
                (players[0].advantage>players[1].advantage ? string = `Advantage ${players[0].name}`: string = `Advantage ${players[1].name}`)
                
                if (players[0].advantage === players [1].advantage) {
                    players[0].advantage = players [1].advantage = 0 
                    string = "Deuce"
                } else if (player.advantage === 2){
                    uploadRoundWinner(player)
                }
            }else{
                deuce = true
                string = "Deuce"
            }
        } else if (player.points === 'win'){
            uploadRoundWinner(player)
        }
    }

    // Función para dar un punto al jugador, si están en deuce le da advantage. Llama a la función anterior y a la posterior
    const pointWonBy = (num)=> {
        if (winner === null) { 
            if (nextRound){
                console.log('\nNEXT ROUND')
                nextRound = false
            }
            let playerPos = num-1
            if (deuce){
                players[playerPos].advantage += 1
            } else {
                players[playerPos].pointsPos += 1
                players[playerPos].points = points[players[playerPos].pointsPos]
                string = `${players[0].name} ${players[0].points} - ${players[1].points} ${players[1].name}`
            }
            uploadScores(players[playerPos]) 
            console.log(getCurrentRoundScore())
        }
        else {console.log(`The mach ends. Winner is ${winner}`)}
    }

    // Métodos para mostrar en consola el estado del partido, son las que retorna la función principal

    const getCurrentRoundScore = () => string

    const getRoundScore = () => `${players[0].name} ${players[0].rounds} - ${players[1].name} ${players[1].rounds} `

    const getMatchScore = () => `${players[0].name} ${players[0].games} - ${players[1].name} ${players[1].games} `

    const getWinner = () => winner
    
    return {pointWonBy, getCurrentRoundScore, getRoundScore, getMatchScore, getWinner}
}