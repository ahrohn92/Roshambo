const { argv } = require('yargs')

const playerMove = argv.move
const moves = ['rock', 'paper', 'scissors']
const computerMove = moves[Math.floor(Math.random() * moves.length)]

class Game {

    constructor(playerMove, computerMove) {
        this.playerMove = playerMove
        this.computerMove = computerMove
        this.result = ''
    }

    play() {
        if (this.playerMove === 'rock') {
            if (this.computerMove === 'rock') {
                this.result = '~The game was a tie.~'
            }
            if (this.computerMove === 'paper') {
                this.result = '~Computer wins.~'
            }
            if (this.computerMove === 'scissors') {
                this.result = '~Player wins.~'
            }
        }
        if (this.playerMove === 'paper') {
            if (this.computerMove === 'rock') {
                this.result = '~Player wins.~'
            }
            if (this.computerMove === 'paper') {
                this.result = '~The game was a tie.~'
            }
            if (this.computerMove === 'scissors') {
                this.result = '~Computer wins.~'
            }
        }
        if (this.playerMove === 'scissors') {
            if (this.computerMove === 'rock') {
                this.result = '~Computer wins.~'
            }
            if (this.computerMove === 'paper') {
                this.result = '~Player wins.~'
            }
            if (this.computerMove === 'scissors') {
                this.result = '~The game was a tie.~'
            }
        }
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

var game = new Game(playerMove, computerMove)
var output = new Output(game)
output.displayOutput()