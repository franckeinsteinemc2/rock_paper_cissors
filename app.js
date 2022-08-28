function getComputerChoice(){

    let mylist=['rock','paper','scissors'];

    return mylist[Math.round(Math.random() * 2)]
}

function singlegame(playerSelection, computerSelection){

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

        console.log("Enter a correct value: 'rock', 'paper' or 'scissors'")
    }

    
}