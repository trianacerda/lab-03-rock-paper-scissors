// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { didUserWin } from "../utils.js";

const test = QUnit.test;

test('testing user win', (userThrow, compThrow) => {
    //Arrange
    // Set up your arguments and expectations
    //const expected = 'win'
    //Act 
    // Call the function you're testing and set the result to a const
    const rockWin = didUserWin('rock', 'scissors');
    const paperWin = didUserWin('paper', 'rock');
    const scissorsWin = didUserWin('scissors', 'paper');
    
    //Expect
    // Make assertions about what is expected versus the actual result
    //expect.equal(actual, expected);
    expect.equal(rockWin, 'win');
    expect.equal(paperWin, 'win');
    expect.equal(scissorsWin, 'win');
});
