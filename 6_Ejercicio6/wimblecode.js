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


function WimbleCode (player1, player2, player3, player4) {
    let tournementWinner = null;
    let isFinalMatch = false;
    const match1 = createMatch(player1, player2)
    const match2 = createMatch(player3, player4)
    let match3 = null
    let string = 'Playing Match'

    const getMatchWinners = () => {
        return new Promise ((resolve, reject) => {
            const checkWinners = () => {
                // Check if match 1 and 2 end, so winner !== null
                if (match1.winner !== null || match2.winner !== null){
                    resolve([match1.getWinner(), match2.getWinner()]);
                    finalMatch();
                // if not ended, check again after 1 minut --> loop until winners
                } else {
                    setTimeout(checkWinners, 60000);
                }
            };

            checkWinners();
        });
    };

    async function finalMatch() {
        const winners = await getMatchWinners();
        match3 = createMatch(winners)
    }

    const getCurrentRoundScore = () => {
        if(isFinalMatch){
            string = 'Final Match:' + match3.getCurrentRoundScore() + '\n'
        }else{string = '\n'
            + 'Match1:' + match1.getCurrentRoundScore() + '\n'
            + 'Match2:' + match2.getCurrentRoundScore()
        }
        return string
    }

    const getRoundScore = () => {
        if(isFinalMatch){
            string = 'Final Match:' + match3.getRoundScore() + '\n'
        }else{string = '\n'
            + 'Match1:' + match1.getRoundScore() + '\n'
            + 'Match2:' + match2.getRoundScore()
        }
        return string
    }

    const getMatchScore = () => {
        if(isFinalMatch){
            string = 'Final Match:' + match3.getMatchScore() + '\n'
        }else{string = '\n'
            + 'Match1:' + match1.getMatchScore() + '\n'
            + 'Match2:' + match2.getMatchScore()
        }
        return string
    }

    const getWinner = () => {
        if (isFinalMatch){
            tournementWinner = match3.winner
        }
        return tournementWinner
    }

    return {match1, match2, match3, getCurrentRoundScore,getRoundScore,getMatchScore,getWinner}
}