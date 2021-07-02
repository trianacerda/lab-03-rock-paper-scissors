export function didUserWin(userThrow, compThrow){
    if (userThrow === compThrow){
        return 'draw';
    }
    else if (userThrow === 'rock' && compThrow === 'scissors'){
        return 'win';  
    }
    else if (userThrow === 'scissors' && compThrow === 'paper'){
        return 'win';  
    }
    else if (userThrow === 'paper' && compThrow === 'rock'){
        return 'win'; 

    }
    else if (userThrow === 'rock' && compThrow === 'paper'){
        return 'lose';  

    }        
    else if (userThrow === 'scissors' && compThrow === 'rock'){
        return 'lose'; 

    }    
    else if (userThrow === 'paper' && compThrow === 'scissors'){
        return 'lose';             
          
    }
}

// const scissors = document.getElementById('scissors');
// const rock = document.getElementById('rock');
// const paper = document.getElementById('paper');

// userThrow
// rock, paper, scissors

// computerThrow
// rock, paper, scissors

// if the userThrow is the same as the computerThrow
//   return 'draw'
// if the user throws rock
//    if computerThrow is scissors return 'win'
// if the user throws paper
//    if computerThrow is rock return 'win'
// if the user throw scissors
//    if computerThrow is paper return 'win'
// return 'lose';
