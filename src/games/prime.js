import { isPrime, getRandomNum } from '../utilities.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const getNumberAndResult = () => {
  const number = getRandomNum();
  const result = isPrime(number);
  return [number, result];
};

const start = () => startGame(getNumberAndResult, description);

export default start;
