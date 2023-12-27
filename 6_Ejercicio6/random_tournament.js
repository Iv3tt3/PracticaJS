const randomPoint = Math.floor(Math.random() * 2) + 1;

const torn = WimbleCode('Alberto', 'David', 'Edu', 'Juan')

console.log(`\nCHECK STATUS`)
console.log('getCurrentRoundScore() :', torn.getCurrentRoundScore())
console.log('getRoundScore() :',torn.getRoundScore())
console.log('getMatchScore() :',torn.getMatchScore())
console.log('getWinner() :',torn.getWinner())

console.log('\nMATCH1 \npointWonBy(1) - 5 points') 
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(2)
torn.match1.pointWonBy(1)
torn.match1.pointWonBy(1) // Alberto C 0 - win David J


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