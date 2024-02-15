const choice = ["rock", "paper", "scissors"]

const playerScore = document.getElementById("playerScore")
const computerScore = document.getElementById("computerScore")
const resultDisplay = document.getElementById("result")

let playerCount = 0
let computerCount = 0

function StartGame(playerChoice)
{
    const computerChoice = choice[Math.floor(Math.random() * 3)]

    let result = ""

    if(playerChoice === computerChoice)
    {
        result = "DRAW!"
        resultDisplay.style.color = "black"
    }
    else
    {
        if(playerChoice === "rock")
        {
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
        }
        else if(playerChoice === "paper")
        {
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
        }
        else if(playerChoice === "scissors")
        {
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
        }
    }

    if(result === "YOU WIN!")
    {
        playerCount++
        resultDisplay.style.color = "hsl(130, 84%, 54%)"
    }
    else if(result === "YOU LOSE!")
    {
        computerCount++
        resultDisplay.style.color = "hsl(0, 84%, 60%)"
    }

    playerScore.innerText = `YOU: ${playerCount}`
    computerScore.innerText = `COMPUTER: ${computerCount}`
    resultDisplay.innerText = result
}