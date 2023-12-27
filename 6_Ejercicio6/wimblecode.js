function WimbleCode () {
    let players = [];
    let rounds = [0,0];
    let games = [0,0];
    let deuce= false;
    let roundWinner = false;

    const createPlayers = () => {

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
    
    const uploadGameScore = (player) => {
        console.log(Math.abs(players[0].rounds - players[1].rounds)>=2)
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
        } else if (players.points === 'win'){
            uploadRoundWinner(player)
        }
    }

    const pointWonBy = (num)=> {
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

    const getCurrentRoundScore = () => string

    const getRoundScore = () => `${players[0].name} ${players[0].rounds} - ${players[1].name} ${players[1].rounds} `

    const getMatchScore = () => `${players[0].name} ${players[0].games} - ${players[1].name} ${players[1].games} `

    const getWinner = () => winner
    
    return {pointWonBy, getCurrentRoundScore, getRoundScore, getMatchScore, getWinner}
}






//const match1 = createMatch(players[0], players,[1])
//const match2 = createMatch(players[2], plaers[3])
/*let finallMatch = false

const checkStatus = () => {
    if (finallMatch === false && match1.winner !== null && match2.winner !== null){
        match3 = createMatch(match1.winner, match2.winner)
        finallMatch = true
    }
    if (finallMatch) {
        if(match3.winner !== null){
            winner = match3.winner
            string = "The winner of tournement"
        }
    }
    return string 
}
const createMatch = (player1, player2) => {
    console.log('Aqui')
}
const torn1 = WimbleCode(['Alberto C','David J', 'Javier M','Edu Aguilar'])

*/