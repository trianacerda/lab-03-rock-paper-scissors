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
export function numTest() {
    const randomNum = Math.floor(Math.random() * 3);
    let compThrow = 'rock';
    if (randomNum === 1) {
        compThrow = 'paper';
    }
    else if (randomNum === 2) {
        compThrow = 'scissors';
    }
    return compThrow;
}
