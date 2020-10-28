const {argv} = require('yargs')

class Game {
    constructor(playerMove, computerMove, winningMoves) {
        this.playerMove = playerMove
        this.computerMove = computerMove
        this.winningMoves = winningMoves
        this.result = ''
    }
    play() {
        this.playerMove === this.computerMove ? this.result = '~The game was a tie.~' : 
        (this.computerMove === this.winningMoves[this.playerMove] ? this.result = '~Computer wins.~' : this.result = '~Player wins.~')
    }
}

class Output {
    constructor(game) {
        this.game = game
        game.play()
    }
    displayOutput() {
        console.log('Playing a game of Roshambo against the computer')
        console.log('Player plays '+game.playerMove+'!')
        console.log('Computer plays '+game.computerMove+'!')
        console.log(game.result)
    }
}

const moves = ['rock', 'paper', 'scissors']

var game = new Game(argv.move, moves[Math.floor(Math.random() * moves.length)], 
winningMoves = {'rock':'paper','paper':'scissors','scissors':'rock'})
var output = new Output(game)
output.displayOutput()