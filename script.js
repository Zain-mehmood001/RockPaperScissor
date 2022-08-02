// we have options to select from
// computer makes a choice
const options = ["Rock", "Paper", "Scissor"];
function getComputerChoice()
{
    let choice = Math.floor((Math.random()*3));
    return options[choice];
}

// get input from player
function getPlayerChoice()
{
    const userchoice = prompt("Type Rock, Paper or Scissor");
    return userchoice;
}

// plays one round of game
function oneRound(userSelection, computerSelection)
{
    const user = userSelection.toUpperCase().charAt(0);
    const computer = computerSelection.toUpperCase().charAt(0);
    const compwin = `${computerSelection} beats ${userSelection}`;
    const userwin = `${userSelection} beats ${computerSelection}`;
    if(user === computer)
    {
        console.log("It is a tie!");
        return -1;
    }
    else if(user === "R" && computer === "P")
    {
        
        console.log("You Lose! " + compwin);
        return 0;
    }
    else if(user === "P" && computer === "R")
    {
        console.log("You win! " + userwin);
        return 1;
    }
    else if(user === "R" && computer === "S")
    {
        console.log("You win! " + userwin);
        return 1;
    }
    else if(user === "S" && computer === "R")
    {
        console.log("You Lose! " + compwin);
        return 0;
    }
    else if(user === "P" && computer === "S")
    {
        console.log("You Lose! " + compwin);
        return 0;
    }
    else if(user === "S" && computer === "P")
    {
        console.log("You win! " + userwin);
        return 1;
    }
    else{
        console.log("You did not enter a valid option!");
        return -1;
    }
}

function game()
{
    let userpoint = 0;
    let comppoint = 0;
    let x;
    for(let i = 0; i < 5; i++)
    {
        x = oneRound(getPlayerChoice(), getComputerChoice());
        if(x === 1)
        {
            userpoint++;
            console.log("User: " + userpoint);
        }
        else if(x === 0){
            comppoint++;
            console.log("computer: " + comppoint);
        }
    }
    if(userpoint > comppoint)
    {
        console.log("YOU WIN!!!");
    }
    else if(userpoint === comppoint){
        console.log("IT IS A DRAW");
    }
    else{
        console.log("COMPUTER WINS!");
    }
}

game();