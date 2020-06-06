import readlineSync from 'readline-sync';
import { numOfRounds, isPrime, getRandomNum } from '../utilities.js';

const brainPrime = (user) => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < numOfRounds;) {
    const number = getRandomNum();
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const answer = isPrime(number);
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratualtions ${user}!`);
};

export default brainPrime;
