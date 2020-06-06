import { getRandomExpression, evaluator } from '../utilities.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const getNumberAndResult = () => {
  const number = getRandomExpression();
  const result = evaluator(number);
  return [number, result];
};

const start = () => startGame(getNumberAndResult, description);

export default start;
