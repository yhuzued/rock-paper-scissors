//create button

const rps = document.querySelector("#r-p-s");

const rock = document.createElement("button");
rock.textContent = "Rock";
rock.addEventListener("click", () => game("rock"));
rps.appendChild(rock);

const paper = document.createElement("button");
paper.textContent = "Paper";
paper.addEventListener("click", () => game("paper"));
rps.appendChild(paper);

const scissors = document.createElement("button");
scissors.textContent = "Scissors";
scissors.addEventListener("click", () => game("scissors"));
rps.appendChild(scissors);

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
        const winResult = "You win," + choiceLowercase + " beats " + computerChoiceLowerCase
        return winResult
    } else if (choiceLowercase === "rock" && computerChoiceLowerCase === "paper"
                || choiceLowercase === "paper" && computerChoiceLowerCase === "scissors"
                || choiceLowercase === "scissors" && computerChoiceLowerCase === "rock" ){
        const loseResult = "You lose," + choiceLowercase + " beaten by " + computerChoiceLowerCase
        return loseResult
    }
}

function game(playerSelection){
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;

    let versus = playRound(playerSelection);

    if (versus.includes("You win")){
        console.log("You win against computer")
        playerWin++;
    } else if (versus.includes("You lose")) {
        console.log("You lose against computer")
        computerWin++;
    } else {
        console.log(("Tie"));
        tie++;
    }
}