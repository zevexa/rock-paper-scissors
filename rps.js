//create human and computer variables
let computerScore = 0;
let humanScore = 0;
let options = ["rock", "paper", "scissors"];



// Write the code for your playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
// randomly display rock, paper or scissors
// display responses based on user input
function playRound(roundNumber){
    let randomNumber = Math.floor(Math.random() * options.length);
    let humanChoice = window.prompt(`Round ${roundNumber}: rock, paper or scissors?`);
    let computerChoice = options[randomNumber];
    let finalChoices = `You chose ${humanChoice.toUpperCase()} | Computer chose ${computerChoice.toUpperCase()}`;
    const humanRockVsScissors = humanChoice === "rock" && computerChoice === "scissors"
    const humanRockVsPaper = humanChoice === "rock" && computerChoice === "paper";
    const humanScissorsVsPaper = humanChoice === "scissors" && computerChoice === "paper";
    const humanScissorsVsRock = humanChoice === "scissors" && computerChoice === "rock";
    const humanPaperVsRock = humanChoice === "paper" && computerChoice === "rock"
    const humanPaperVsScissors = humanChoice === "paper" && computerChoice === "scissors";
    const isTied = humanChoice === "rock" && computerChoice === "rock" || humanChoice === "paper" && computerChoice === "paper" || humanChoice === "scissors" && computerChoice === "scissors";
    
    if(humanChoice === null) return;
    
    if(humanRockVsScissors){
        console.log(finalChoices);
        console.log("You win! Rock beats scissors, BITCH!");
        humanScore++;
        console.log(`Your score is now: ${humanScore} and the computer score is ${computerScore}`);
        
    } else if(humanRockVsPaper){
        console.log(finalChoices);
        console.log("Sorry, bro, paper is more powerful than rock for some reason");
        computerScore++;
        console.log(`Your score is still: ${humanScore} and the computer's score is ${computerScore}`);
        
    } else if(humanScissorsVsPaper) {
        console.log(finalChoices);
        console.log("Get it, girl! Scissors ate, paper's hungry!");
        humanScore++;
        console.log(`Your score is now: ${humanScore} and the computer score is ${computerScore}`);
       
    } else if(humanScissorsVsRock){
        console.log(finalChoices);
        console.log("Siiiis, the scissors are weak! You lose this one.");
        computerScore++;
        console.log(`Your score is still: ${humanScore} and the computer's score is ${computerScore}`);
    
    } else if(humanPaperVsRock){
        console.log(finalChoices);
        console.log("That's right, paper reigns supreeeeme!!");
        humanScore++;
        console.log(`Your score is now: ${humanScore} and the computer score is ${computerScore}`);
    
    } else if(humanPaperVsScissors){
        console.log(finalChoices);
        console.log("You've been cut!");
        computerScore++
        console.log(`Your score is still: ${humanScore} and the computer's score is ${computerScore}`);
    
    } else if(isTied){
        console.log(finalChoices);
        console.log("Issa tie! Nobody wins!");
        console.log(`Your score is still: ${humanScore} and the computer's score is still ${computerScore}`);
        
    } 
    
}



//write the logic to play game - call playRound for 5 rounds

function playGame(){
    
    let roundsMax = 5;

    for(let currentRound = 1; currentRound <= roundsMax; currentRound++){
        playRound(currentRound);
        } 
    if(humanScore > computerScore){
        console.log(`You win!`);
        console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`)
    } else if(computerScore > humanScore){
        console.log(`The computers are stealing our jobs and you let them get away with it. You lose!`);
        console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`)
    } else if(computerScore === humanScore){
        console.log(`You tied! You both live to see another day.`)
        console.log(`Final Score: You: ${humanScore} | Computer: ${computerScore}`)
    }
}

playGame();

//old code and notes based on initial instruction

//create a function that randomly displays rock, paper or scissors
// function getComputerChoice(){
//     let playerOptions = ["rock", "paper", "scissors"]
//     randomNumber =  Math.floor(Math.random() * playerOptions.length);
//     console.log("Computer's choice: " + playerOptions[randomNumber]);
//     return playerOptions[randomNumber];
// }
//console.log(getComputerChoice());

//create a function where getHumanChoice will return one of the valid choices, depending on user input
// function getHumanChoice(){
//     var prompt = window.prompt("rock, paper or scissors?");
//     if(prompt.toLowerCase !== ""){
//         console.log("Your choice: " + prompt);
//         return prompt.toLowerCase();
//     } 
// }
//console.log(getHumanChoice());
// const computerSelection = getComputerChoice();
// const humanSelection = getHumanChoice();
//playRound(humanSelection, computerSelection);


