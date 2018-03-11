// Required variables to be provided by user

p1Name // String
p2Name  // String
p1Bet // Number between 1 and 10
p1Guess  // Number between 1 and 10
p2Bet // Number between 1 and 10
p2p1Guess // Number between 1 and 10

// Required variables by game (to use in functions and also pull from DOM.

round // Numbe starting at 1
p1Points // Number starting at 50
p2Points // Number starting at 50
jackpot // Number starting at 100
p1Multiplier // Number betwen 1 and 3 to multiply bet amount by
p2Multiplier // Number betwen 1 and 3 to multiply bet amount by
winnerDifference // Difference winner of round was to opponent's bet
roundDifference // Total diffence that is added to the jackpot
p1RoundsWon // Number of rounds won
p2RoundsWon // Number of rounds won
gameWinner // Winner of game and jackpot
roundWinnder // Winner of round. Increases round count by one of round winner.
scoreboard // DIV element for insertion of style tags to winner/loser (green/red) appropriate style tag to.
jackpot // number
tie // Boolean. Round count goes up by one. subtractPoints to both players
superTie // Boolean. If true, award both players double their bet amount. Double jackpot amount. Set
newGame // Alerts players asking "Are you sure?". If yes, resets the game and clears all elements, if not, goes away.
goButton // event listener that calls the playRound function.


//Local storage used to maintain current state of game including points, jackpot, round, and names.


// Required Functions

roundReveal // Reveals the winner of the round.
hideNumbers  // Hides a players numbers after they have entered them both in and clicked the lock-in button.
subtractPoints // Subtract bet amount from player who is not closest. If tie, subtract from both but not multiplier. player points - (multiplier == 1 * bet amount)
addPoints // Adds points (minus difference, times their multiplier) to winner.
findClosest // Determine who was closest to the other player's guess.
findDifference // Calculate difference each player was to the other player's guess
isNumber // Determines if the player enters a number. If not an alert is displayed or a color signifies incorrect entry
availableMultiplier // Determines what multiplier a player can use based on number of points they have.
revealDelay // delays the reveal of the winner of the round.
playRound // Checks if both players have locked in their numbers. If true, runs other functions above in approximately this order: findClosest, findDifference,


// DOM Functions

// Clear boxes
//
