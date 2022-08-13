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

function playRound(){
    let choice = prompt("Rock, Paper, or Scissors?")
    let computerChoice = getComputerChoice()
    let choiceLowercase = choice.toLowerCase()
    let computerChoiceLowerCase = computerChoice.toLowerCase()
    
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

function game(){
    let playerWin = 0;
    let computerWin = 0;
    let tie = 0;
    for (let i = 0; i < 5; i++) {
        let versus = playRound()
        if (versus.includes("You win")){
            console.log(versus)
            playerWin++
            console.log("You win: " + playerWin)
        }
        else if (versus.includes("You lose")) {
            console.log(versus)
            computerWin++
            console.log("Computer win: " + computerWin)
        }
        else if (versus.includes("tie")){
            console.log(versus)
            tie++
            console.log("Tie(s): " + tie)
        }
        else {
            console.log("Bro, this code is broke")
        }
    }
    console.log("The result is:")
    if (playerWin > computerWin){
        console.log("You win against computer")
    } else {
        console.log("You lose against computer")
    }
    console.log("You win: " + playerWin)
    console.log("Computer win: " + computerWin)
    console.log("Tie(s): " + tie)
}