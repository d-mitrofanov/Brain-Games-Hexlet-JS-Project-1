import {
  sayWelcome, askName, sayGameRules, askQuestion, getUserAnswer,
} from './cli.js';
import { numOfRounds, convertResult } from './utilities.js';

const startGame = (getNumberAndResult, description) => {
  sayWelcome();
  const userName = askName();
  if (description === null) {
    return;
  }
  sayGameRules(description);
  for (let i = 0; i < numOfRounds;) {
    const [number, result] = getNumberAndResult();
    askQuestion(number);
    const userAnswer = convertResult(result, getUserAnswer());
    if (userAnswer === result) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${result}. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratualtions ${userName}!`);
};

export default startGame;
