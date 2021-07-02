import { didUserWin, numTest } from '../utils.js';

const test = QUnit.test;

test('testing user win', (expect) => {
    const expected = 'win';
    const rockWin = didUserWin('rock', 'scissors');
    expect.equal(rockWin, expected);
});

test('testing user lose', (expect) => {
    const expected = ('lose');
    const rockLose = didUserWin('scissors', 'rock');
    expect.equal(rockLose, expected);
});

test('testing user draw', (expect) => {
    const expected = ('draw');
    const rockDraw = didUserWin('rock', 'rock');
    expect.equal(rockDraw, expected);
});

test('testing what is returned from random num fuction', (expect) => {
    const expected = 'string';
    const random = typeof(numTest());
    expect.equal(random, expected);
});