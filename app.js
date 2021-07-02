// import functions and grab DOM elements
import { didUserWin } from './utils.js';
// initialize state


const playBtn = document.getElementById('btn');
const scissors = document.getElementById('scissors');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper'); 
const winsSpan = document.getElementById('total-wins');
const lossesSpan = document.getElementById('losses-wins');
const drawsSpan = document.getElementById('draws-wins');

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
    console.log(userThrow, compThrow);


    if (isWinner === 'win'){
        wins++;
    } 
    else if (isWinner === 'lose'){
        losses++;
    } 
    else {
        draws++;
    } 

    winsSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawsSpan.textContent = draws;

});   

resetBtn.addEventListener('click', ()=>{
    btn.disabled = false;
    resetBtn.style.visibility = 'hidden';
});  