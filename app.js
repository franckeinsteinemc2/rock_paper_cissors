function getComputerChoice(){

    let mylist=['rock','paper','scissors'];

    return mylist[Math.round(Math.random() * 2)]
}

function playRound(playerSelection, computerSelection){

    playerSelection=playerSelection.toLowerCase()
    computerSelection=computerSelection.toLowerCase()

    if(['rock','paper','scissors'].includes(playerSelection)){

    if (playerSelection=='rock'){
        if (computerSelection=='rock'){
            return "It's a draw !"
        }
        else{
            if(computerSelection=='paper'){
                return "You Lose! Paper beats Rock"
            }
            else{
                return "You Win ! Rock beats Scissors"
            }
        }
    }

    if (playerSelection=='scissors'){
        if (computerSelection=='scissors'){
            return "It's a draw !"
        }
        else{
            if(computerSelection=='rock'){
                return "You Lose! Rock beats Scissors"
            }
            else{
                return "You Win ! Scissors beat paper"
            }
        }
    }

    if (playerSelection=='paper'){
        if (computerSelection=='paper'){
            return "It's a draw !"
        }
        else{
            if(computerSelection=='scissors'){
                return "You Lose! Scissors beat Paper"
            }
            else{
                return "You Win ! Paper beats Rock"
            }
        }
    }

    }

    else{

        return "Enter a correct value: 'rock', 'paper' or 'scissors'"
    }

    
}

function game(){
    let playerSelection;
    let result;
    let playerScore=0;
    let computerScore=0;

    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("Enter your selection ['rock', 'paper' or 'scissors']")
        computerSelection=getComputerChoice()
        result=playRound(playerSelection,computerSelection)

        console.log("Partie "+i+":")

        if (result.includes('Win')){
                playerScore++
                console.log(result)
        }
        else{
            if(result.includes('Lose')){
                computerScore++
                console.log(result)
            }
            else{
                console.log(result)
            }
        }


    }

    console.log("Final results: Player Score:"+playerScore+" & Computer Score: "+computerScore)

    if(computerScore>playerScore){
        console.log("Computer wins !")

    }
    else{
        if(computerScore<playerScore){
            console.log("Player wins!")
        }
        else{
            console.log("It's a draw !")
        }
    }
}



