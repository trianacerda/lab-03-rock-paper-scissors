// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from '../utils.js';

const test = QUnit.test;

test('testing user win', (expect) => {
    const expected = 'win';
    const rockWin = didUserWin('rock', 'scissors');
    expect.equal(rockWin, expected);
});

// test('testing user lose', (expect) => {
//     const expected = ('lose');
//     const rockLose = didUserWin('scissors', 'rock');
//     expect.equal(rockLose, 'lose');
// });

// test('testing user draw', (expect) => {
//     const expected = ('draw');
//     const rockDraw = didUserWin('rock', 'rock');
//     expect.equal(rockDraw, 'draw');
// });



// const rockWin = didUserWin('rock', 'scissors');
// const paperWin = didUserWin('paper', 'rock');
// const scissorsWin = didUserWin('scissors', 'paper');

// expect.equal(rockWin, 'win');
// expect.equal(paperWin, 'win');
// expect.equal(scissorsWin, 'win');
// test('testing user lose', (userThrow, compThrow) => {
   
//     const rockLose = didUserLose('rock', 'paper');
//     const paperLose = didUserLose('paper', 'scissors');
//     const scissorsLose = didUserLose ('scissors', 'rock');
    
//     expect.equal(rockWin, 'lose');
//     expect.equal(paperWin, 'lose');
//     expect.equal(scissorsWin, 'lose');
// });
