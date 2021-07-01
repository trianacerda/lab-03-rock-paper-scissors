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

playBtn.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');
    const userThrow = selected.value;
    const isWinner = didUserWin(userThrow, compThrow);


    if (isWinner){
      wins++
    } 
      else if {
      losses++
    } 
      else {
    } draws++

    winsSpan.textContent = wins;
    lossesSpan.textContent = win;

  });   

  resetBtn.addEventListener('click', ()=>{
    btn.disabled = false;
    resetBtn.style.visibility = 'hidden';
  });  