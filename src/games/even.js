import readlineSync from 'readline-sync';
import { isEven, getRandomNum } from '../utilities.js';

const brainEven = (user) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  const integers = [getRandomNum(), getRandomNum(), getRandomNum()];
  for (let i = 0; i < integers.length;) {
    console.log(`Question: ${integers[i]}`);
    const userAnswer = readlineSync.question();
    if (isEven(integers[i]) === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${isEven(integers[i])}. Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratualtions ${user}!`);
};

export default brainEven;
