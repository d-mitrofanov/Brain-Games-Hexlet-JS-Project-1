import readlineSync from 'readline-sync';
import { getRandomNum, getGcd, numOfRounds } from '../utilities.js';

const brainGdc = (user) => {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < numOfRounds;) {
    const [num1, num2] = [getRandomNum(), getRandomNum()];
    console.log(`Question: ${num1} ${num2}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = getGcd(num1, num2);
    if (Number(userAnswer) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
    console.log(`Congratulations, ${user}!`);
  }
};

export default brainGdc;
