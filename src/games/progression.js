import readlineSync from 'readline-sync';
import { hiddenElArrayGenerator, numOfRounds } from '../utilities.js';

const brainProgression = (user) => {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < numOfRounds;) {
    const [hiddenArray, answer] = hiddenElArrayGenerator();
    console.log(`Question: ${hiddenArray}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (answer === Number(userAnswer)) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratualtions ${user}!`);
};

export default brainProgression;
