//selecttor
const rps = document.querySelector("#r-p-s");

//counting variable
let playerWin = 0;
let playerLose = 0;
let playerTie = 0;
let totalGamePlayed = 0;

//create button
const rock = document.createElement("button");
rock.textContent = "Rock";
rps.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
rps.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
rps.appendChild(scissors);

//text-score
const result = document.createElement("div");
result.textContent = "Start game";
rps.appendChild(result);

const win = document.createElement("div");
win.textContent = "Win: 0";
rps.appendChild(win)
const lose = document.createElement("div");
lose.textContent = "Lose: 0";
rps.appendChild(lose)
const tieBreak = document.createElement("div");
tieBreak.textContent = "Tie(s): 0";
rps.appendChild(tieBreak)

//creating total Result
const totalResult = document.createElement("div");
totalResult.textContent = "";
rps.appendChild(totalResult);

//rock
rock.addEventListener("click", () => {
    if (totalGamePlayed < 5){
        game("rock");
    }
});
//paper
paper.addEventListener("click", () => {
    if (totalGamePlayed < 5){
        game("paper");
    }
});
//scissors
scissors.addEventListener("click", () => {
    if (totalGamePlayed < 5){
        game("scissors");
    }
});



//function
function getComputerChoice(){
    let value = Math.random()
    let valueFix = value * 100
    
    if (valueFix <= 33){
        return "Rock"
    } else if (valueFix > 33 && valueFix <= 66){
        return "Paper"
    } else if (valueFix > 66){
        return "Scissors"
    } else {
        return "Error"
    }
}

function playRound(playerChoice){
    let computerChoice = getComputerChoice();
    let choiceLowercase = playerChoice.toLowerCase();
    let computerChoiceLowerCase = computerChoice.toLowerCase();
    
    if(choiceLowercase === computerChoiceLowerCase){
        const tieResult = "The result is tie"
        return tieResult
    } else if (choiceLowercase === "rock" && computerChoiceLowerCase === "scissors"
                || choiceLowercase === "paper" && computerChoiceLowerCase === "rock"
                || choiceLowercase === "scissors" && computerChoiceLowerCase === "paper" ){
        const winResult = "You win, " + choiceLowercase + " beats " + computerChoiceLowerCase
        return winResult
    } else if (choiceLowercase === "rock" && computerChoiceLowerCase === "paper"
                || choiceLowercase === "paper" && computerChoiceLowerCase === "scissors"
                || choiceLowercase === "scissors" && computerChoiceLowerCase === "rock" ){
        const loseResult = "You lose, " + choiceLowercase + " beaten by " + computerChoiceLowerCase
        return loseResult
    }
}

function game(choice){
    let gamePlay = playRound(choice);
    if (gamePlay.includes("You win")){
        ++playerWin;
        win.textContent = "Win: " + playerWin;
        result.textContent = gamePlay;
        totalGamePlayed++;
    } else if (gamePlay.includes("You lose")){
        ++playerLose;
        lose.textContent = "Lose  " + playerLose;
        result.textContent = gamePlay;
        totalGamePlayed++;
    } else if (gamePlay.includes("tie")) {
        ++playerTie;
        tieBreak.textContent = "Tie(s): " + playerTie;
        result.textContent = gamePlay;
        totalGamePlayed++;
    }

    if (totalGamePlayed >= 5){
        gameFinished()
        rematch();
    }
}

function gameFinished(){
    if (playerWin === playerLose && playerTie > playerLose && playerTie > playerWin){
        totalResult.textContent = "The game finished, you tie against computer.";
    } else if (playerWin > playerLose){
        totalResult.textContent = "The game finished, you win against computer.";
    } else if (playerLose > playerWin) {
        totalResult.textContent = "The game finished, you lose against computer.";
    } else {
        console.log("Error");
        return "Error";
    }
    result.textContent = "";
}

function rematch(){
    const buttonRematch = document.createElement("button");
    buttonRematch.textContent = "Rematch?"
    rps.appendChild(buttonRematch);
    buttonRematch.addEventListener("click", () =>{
        window.location.reload();
    });
}