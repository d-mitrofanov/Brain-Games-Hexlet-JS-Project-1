import { getRandomNum, getGcd } from '../utilities.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const getNumberAndResult = () => {
  const [num1, num2] = [getRandomNum(), getRandomNum()];
  const number = `${num1} ${num2}`;
  const result = getGcd(num1, num2);
  return [number, result];
};

const start = () => startGame(getNumberAndResult, description);

export default start;
