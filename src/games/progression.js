import hiddenElArrayGenerator from '../utilities.js';
import startGame from '../index.js';

const description = 'What number is missing in the progression?';

const getNumberAndResult = () => {
  const [number, result] = hiddenElArrayGenerator();
  return [number, result];
};

const start = () => startGame(getNumberAndResult, description);

export default start;
