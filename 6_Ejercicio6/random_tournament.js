const randomPoint = Math.floor(Math.random() * 2) + 1;

const torn = WimbleCode('Alberto', 'David', 'Edu', 'Juan')

console.log(`\nCHECK STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())

console.log('\nMATCH1 Round 1 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J

console.log(`\nCHECK MATCH1 STATUS`)
console.log('getCurrentRoundScore() :', torn.match1.getCurrentRoundScore())
console.log('getRoundScore() :',torn.match1.getRoundScore())
console.log('getMatchScore() :',torn.match1.getMatchScore())
console.log('getWinner() :',torn.match1.getWinner())

console.log(`\nCHECK TOURNAMENT STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())

//Match1: First game Alberto wins:
console.log('\nMATCH1 Round 2 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J
console.log('\nMATCH1 Round 3 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J
console.log('\nMATCH1 Round 4 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J

//Match2: First game Juan winn
console.log('\nMATCH2 Round 1 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(2)
torn.match2.pointWonBy(2)
torn.match2.pointWonBy(2)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(2)
torn.match2.pointWonBy(2)
torn.match2.pointWonBy(2) // Edu 0 - win Juan

console.log('\nMATCH1 Game 2 Round 1 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Edu win - 0 Juan

console.log(`\nCHECK MATCH1 STATUS`)
console.log('getCurrentRoundScore() :', torn.match1.getCurrentRoundScore())
console.log('getRoundScore() :',torn.match1.getRoundScore())
console.log('getMatchScore() :',torn.match1.getMatchScore())
console.log('getWinner() :',torn.match1.getWinner())

console.log(`\nCHECK MATCH2 STATUS`)
console.log('getCurrentRoundScore() :', torn.match2.getCurrentRoundScore())
console.log('getRoundScore() :',torn.match2.getRoundScore())
console.log('getMatchScore() :',torn.match2.getMatchScore())
console.log('getWinner() :',torn.match2.getWinner())

console.log(`\nCHECK TOURNAMENT STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())


//MATCH1 WINNER: Alberto
console.log('\nMATCH1 Game 2 Round 2 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J
console.log('\nMATCH1 Game 2 Round 3 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J
console.log('\nMATCH1 Game 2 Round 4 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C win - 0 David J

//MATCH2 GAME WINNER: Edu
console.log('\nMATCH2 Round 2 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 3 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 4 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 5 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan

console.log(`\nCHECK MATCH1 STATUS`)
console.log('getCurrentRoundScore() :', torn.match1.getCurrentRoundScore())
console.log('getRoundScore() :',torn.match1.getRoundScore())
console.log('getMatchScore() :',torn.match1.getMatchScore())
console.log('getWinner() :',torn.match1.getWinner())

console.log(`\nCHECK MATCH2 STATUS`)
console.log('getCurrentRoundScore() :', torn.match2.getCurrentRoundScore())
console.log('getRoundScore() :',torn.match2.getRoundScore())
console.log('getMatchScore() :',torn.match2.getMatchScore())
console.log('getWinner() :',torn.match2.getWinner())

console.log(`\nCHECK TOURNAMENT STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())

//MATCH2 Match WINNER: Edu
console.log('\nMATCH2 Round 2 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 3 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 4 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan
console.log('\nMATCH2 Round 5 \npointWonBy(1) - 5 points') 
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1)
torn.match2.pointWonBy(1) // Edu win - 0 Juan

console.log(`\nCHECK TOURNAMENT STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())


console.log(torn.match3())