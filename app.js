// import functions and grab DOM elements
import { didUserWin } from './utils.js';
// initialize state


const playBtn = document.getElementById('btn');
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('total-losses');
const drawsSpan = document.getElementById('total-draws');
const message = document.getElementById('message');
//const resetBtn = document.getElementById('reset-btn');

let wins = 0;
let losses = 0;
let draws = 0;

playBtn.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userThrow = selected.value;
    const randomNum = Math.floor(Math.random() * 3);
    let compThrow = 'rock';
    if (randomNum === 1) {
        compThrow = 'paper';
    }
    else if (randomNum === 2) {
        compThrow = 'scissors';
    }
    const isWinner = didUserWin(userThrow, compThrow);
    //console.log(userThrow, compThrow);


    if (isWinner === 'win'){
        message.textContent = `computer picked ${compThrow}, you WIN!`;
        wins++;
    } 
    else if (isWinner === 'lose'){
        message.textContent = `computer picked ${compThrow}, sorry you LOSE!`;
        losses++;
    } 
    else {
        message.textContent = `computer picked ${compThrow}, it's a DRAW`;
        draws++;
    } 


    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;

});   

// resetBtn.addEventListener('click', ()=>{
//     function clearResult(){
//         document.getElementById('reset-btn').value = ''
//     }    
// });  