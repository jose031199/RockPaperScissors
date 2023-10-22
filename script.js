//Function of computer to Choose an option

let countUser = 0;
let countComputer = 0;
let count = 0;
const getChoice = document.getElementById('gameChoices');
function getComputerChoice(){
    const options =['rock','paper','scissors'];
    //Random to choose a value
    const choice =Math.floor(Math.random()*options.length);
    return options[choice];
}

function playRound(userSelection){
    let computerChoice = getComputerChoice().trim().toLowerCase();
    let message = "";
    if (userSelection == 'rock' && computerChoice == 'scissors' ) {
        countUser+=1;
        message = "You win, "+userSelection+" wins to "+computerChoice;
    }else if(userSelection == 'scissors' && computerChoice == 'rock'){
        countComputer+=1;
        message = "You lose, "+userSelection+" lose to "+computerChoice;
    }else if(userSelection == 'paper' && computerChoice == 'rock'){
        countUser+=1;
        message = "You win, "+userSelection+" wins to "+computerChoice;
    }else if(userSelection == 'rock' && computerChoice == 'paper'){
        countComputer+=1;
        message = "You lose, "+userSelection+" lose to "+computerChoice;
    }else if(userSelection == 'scissors' && computerChoice == 'paper'){
        countUser+=1;
        message = "You win, "+userSelection+" wins to "+computerChoice;
    }else if(userSelection == 'paper' && computerChoice == 'scissors'){
        countComputer+=1;
        message = "You lose, "+userSelection+" lose to "+computerChoice;
    }else{
        message = "It's a tie";

    }
    return message;
}

function playerChoice(e){
    value = e.textContent.toLowerCase().trim();
    game(value);
    
    //return value;
}

function game(userChoice){
   let message = playRound(userChoice);
   const divResult = document.getElementById('resultado');
   let result = '';
    //console.log(message)
    count+=1;
    //console.log(count)
    console.log(divResult)


    document.getElementById('round').innerHTML +='<h3>'+count+'.'+message+'</h3>'; 

    if (count==5) {
        if (countUser > countComputer) {
            result ='You win'
        }else if(countComputer > countUser){
            result = 'You lose'
        }else{
            result = 'Tie'
        }
        document.getElementById('round').innerHTML += '<p>'+result+'</p>'
    }

}



