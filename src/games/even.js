import readlineSync from 'readline-sync';
import { isEven, getRandomNum, numOfRounds } from '../utilities.js';

const brainEven = (user) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < numOfRounds;) {
    const number = getRandomNum();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = isEven(number);
    if (answer === userAnswer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratualtions ${user}!`);
};

export default brainEven;
