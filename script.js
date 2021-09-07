
var player1 = {
    sign:"X",
    hasWon: false
};
var player2 = {
    sign:"O",
    hasWon: false
};
var gameIsAlive = false;
document.getElementById("disabled").disabled = true;

var rollDice = Math.floor(Math.random() * 2 + 1);

let squares = document.querySelectorAll(".width-height");
console.log(squares);

function startGame() {
    gameIsAlive = true;

    isAlive();

    for(let i = 0; i < squares.length; i++) {
        squares[i].addEventListener("click", function() {
            squares[i].innerHTML = player1.sign;
        });
    }
}

function restartGame() {
    for(let i = 0; i < squares.length; i++) {
        squares[i].innerHTML = "";
    }
}

function isAlive() {
    document.getElementById("disabled").disabled = !gameIsAlive;
    document.getElementById("start-game").disabled = gameIsAlive;
}
