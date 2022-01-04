let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Remainder : One line function have auto-Return
const generateTarget = () => Math.floor(Math.random() * 10);

// V2 of compareGuesses && getAbsoluteDistance with the Math.abs() methode 

const getAbsoluteDistance = (toGuess, guess) => {
    let distance = Math.abs(toGuess - guess);
    return distance;
}

const compareGuesses = (userGuess, computerGuess, numberToGuess ) => {
    const distanceeUser = getAbsoluteDistance(numberToGuess, userGuess);
    const distanceComputer = getAbsoluteDistance(numberToGuess, computerGuess);
    return distanceeUser <= distanceComputer;
}

/* V1 of compareGuesses && getAbsoluteDistance

const getAbsoluteDistance = (toGuess, guess) => {
    let distance = toGuess - guess
    return distance
}

const compareGuesses = (userGuess, computerGuess, numberToGuess ) => {
    //check if userGuess is valid
    if(userGuess < 0 || userGuess > 9) {
        alert('Your number is out of range');
    }

    //calculate differance
    let differanceUser = getAbsoluteDistance(numberToGuess, userGuess);
    let differanceComputer = getAbsoluteDistance(numberToGuess, computerGuess);
    
    if (differanceUser < 0) {
        differanceUser *= -1;
    }
    if (differanceComputer < 0) {
        differanceComputer *= -1;
    }

    //find the closest
    if ( differanceUser === 0) {
        return true;
    } else if ( differanceComputer === 0) {
        return false;
    } else if ( differanceUser < differanceComputer) {
        return true;
    } else if ( differanceComputer < differanceUser){
        return false;
    }
}
*/

const updateScore = winner => {
    /* V1
    if(winner === 'human'){
        humanScore++;
    } else if(winner === 'computer'){
        computerScore++;
    }
    */
    winner === 'human' ? humanScore++ : computerScore++;
}

const advanceRound = () => currentRoundNumber++;









