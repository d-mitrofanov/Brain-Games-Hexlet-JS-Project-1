import readlineSync from 'readline-sync';
import { getRandomExpression, evaluator, numOfRounds } from '../utilities.js';

const brainCalc = (user) => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < numOfRounds;) {
    const expression = getRandomExpression();
    const answer = evaluator(expression);
    console.log(`Question: ${expression}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (Number(userAnswer) === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${user}!`);
      return;
    }
  }
  console.log(`Congratualtions ${user}!`);
};

export default brainCalc;
