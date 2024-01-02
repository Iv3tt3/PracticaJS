let jugadores = prompt('Introduce el numero de jugadores del torneo:\nMínimo 4 jugadores. El número debe ser potencia de 2 (Ej: 4, 8, 16, 32, 64, etc.)')
let n = Math.log2(jugadores); // Rondas que habrá son 2^n
// Mientras n no sea un numero entero, volver a preguntar el numero de jugadores del torneo
while (n%1 === 0){
    n = prompt('El número no es válido. Introduce un número de jugadores potencia de 2. Mínimo 4 jugadores\n(Ej: 4, 8, 16, 32, 64, etc.)')
}

let tournamentPlayers = []
let introduceNew = "SI"
while (introduceNew === "SI"){
    let player1 = ""
    if (player1 === ""){
        player1 = prompt('Introduce el nombre del jugador1:')
    }
    let player2 = ""
    if (player2 === ""){
        player2 = prompt('Introduce el nombre del jugador2:')
    }
    tournamentPlayers.push(player1)
    tournamentPlayers.push(player2)
    introduceNew = prompt('Quieres introducir dos jugadores más al torneo? (SI/NO)').toUpperCase()
    while (introduceNew !== "SI" && introduceNew !== "NO")
        introduceNew = prompt('Introduce "SI" o "NO" \nQuieres introducir dos jugadores más al torneo? (SI/NO)').toUpperCase()
}

function createPartners (...tournamentPlayers){
    let games = []
    let i=0
    while (tournamentPlayers.length !== 0){
        let match = createMatch(player0, player1)
        games.push(match)
        tournamentPlayers = tournamentPlayers.shift()
        tournamentPlayers = tournamentPlayers.shift()
    }
    return games
}

let games = createPartners(tournamentPlayers)

function wimbleCode (games){
    let winner = null
    const getWinner = () =>{
        let matchPlaying = false
        for (let i=0; i>games.length; i++){
            if (games[i].getWinner === null){
                matchPlaying = true
            }
        }
    }
}




function createMatch (player1, player2) {
    let winner = null
    const points = [0, 15, 30, 40, 'win'];
    let deuce = false;
    let nextRound = false;
    let string = ""
    
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

    const players = [createPlayers(player1), createPlayers(player2)]
    string = `${players[0].name} ${players[0].points} - ${players[1].points} ${players[1].name}`

    
    const uploadGameScore = (player) => {
        if (player.rounds > 3 && Math.abs(players[0].rounds - players[1].rounds)>=2){
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

    const getCurrentRoundScore = () => string

    const getRoundScore = () => `${players[0].name} ${players[0].rounds} - ${players[1].name} ${players[1].rounds} `

    const getMatchScore = () => `${players[0].name} ${players[0].games} - ${players[1].name} ${players[1].games} `

    const getWinner = () => winner
    
    return {players, pointWonBy, getCurrentRoundScore, getRoundScore, getMatchScore, getWinner}
}