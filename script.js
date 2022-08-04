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


let userpoint = 0;
let comppoint = 0;
// plays one round of game
function oneRound(userSelection, computerSelection)
{
    const user = userSelection.toUpperCase().charAt(0);
    const computer = computerSelection.toUpperCase().charAt(0);
    const compwin = `${computerSelection} beats ${userSelection}`;
    const userwin = `${userSelection} beats ${computerSelection}`;
    if(user === computer)
    {
        return "It is a tie!";
    }
    else if(user === "R" && computer === "P")
    {
        ++comppoint;
        return "You Lose! " + compwin;
    }
    else if(user === "P" && computer === "R")
    {
        ++userpoint;
        return "You win! " + userwin;
        
        //return 1;
    }
    else if(user === "R" && computer === "S")
    {
        ++userpoint;
        return "You win! " + userwin;
        
        //return 1;
    }
    else if(user === "S" && computer === "R")
    {
        ++comppoint;
        return "You Lose! " + compwin;
        
        //return 0;
    }
    else if(user === "P" && computer === "S")
    {
        ++comppoint;
        return "You Lose! " + compwin;
        
        //return 0;
    }
    else if(user === "S" && computer === "P")
    {
        ++userpoint;
        return "You win! " + userwin;
        
       // return 1;
    }

 
}

// simple ui stuff to make interactive

let str = ".";
const results = document.querySelector(".results");
const result = document.createElement('h5'); // create a paragraph type element
const user = document.createElement('h6');
const comp = document.createElement('h6');
user.style.margin = 0;
comp.style.margin = 0;
result.style.margin = 0;
results.style.display = "flex";
results.style.flexDirection = 'column';
results.appendChild(user);
results.appendChild(comp);
results.appendChild(result);


  

    


const buttons = document.querySelectorAll('.buttons button'); // selects all the buttons
buttons.forEach(button => button.addEventListener('click', function(e){

    const playerChoice = e.target.textContent;
    const computerChoice = getComputerChoice();
    user.textContent = "Player: " + userpoint;
    comp.textContent = "Computer: " + comppoint;
    if(userpoint === 5)
    {
        result.textContent = "USER WINS!";
        return;
    }
    if(comppoint === 5)
    {
        result.textContent = "COMPUTER WINS!";
        return;
    }
    result.textContent = str;
    str = oneRound(playerChoice, computerChoice);
    
})); 

