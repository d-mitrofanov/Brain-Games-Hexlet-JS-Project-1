import { isEven, getRandomNum } from '../utilities.js';
import startGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const getNumberAndResult = () => {
  const number = getRandomNum();
  const result = isEven(number);
  return [number, result];
};

const start = () => startGame(getNumberAndResult, description);

export default start;
