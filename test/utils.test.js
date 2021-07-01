// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from './utils.js';

const test = QUnit.test;

test('testing user win', (userThrow, compThrow) => {
   
    const rockWin = didUserWin('rock', 'scissors');
    const paperWin = didUserWin('paper', 'rock');
    const scissorsWin = didUserWin('scissors', 'paper');
    
    expect.equal(rockWin, 'win');
    expect.equal(paperWin, 'win');
    expect.equal(scissorsWin, 'win');
});

// test('testing user lose', (userThrow, compThrow) => {
   
//     const rockLose = didUserLose('rock', 'paper');
//     const paperLose = didUserLose('paper', 'scissors');
//     const scissorsLose = didUserLose ('scissors', 'rock');
    
//     expect.equal(rockWin, 'lose');
//     expect.equal(paperWin, 'lose');
//     expect.equal(scissorsWin, 'lose');
// });
