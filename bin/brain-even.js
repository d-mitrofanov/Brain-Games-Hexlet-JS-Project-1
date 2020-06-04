#!/usr/bin/env node

import readlineSync from 'readline-sync';

import intro from '../src/cli.js';

const userName = intro();

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getRandomNum = () => {
  const min = Math.ceil(2);
  const max = Math.floor(99);
  return Math.floor(Math.random() * (max - min)) + min;
};

const brainEven = () => {
  const integers = [getRandomNum(), getRandomNum(), getRandomNum()];
  for (let i = 0; i < integers.length;) {
    console.log(`Question: ${integers[i]}`);
    const userAnswer = readlineSync.question();
    if (isEven(integers[i]) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(integers[i])}. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratualtions ${userName}!`);
};

brainEven();
