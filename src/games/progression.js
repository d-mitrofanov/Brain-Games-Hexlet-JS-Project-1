import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

const hideElementInArray = (array, index) => {
  const arrayToReturn = array;
  arrayToReturn[index] = '..';
  return array.join(' ');
};

const hiddenElArrayGenerator = () => {
  let num = 0;
  const magnifier = getRandomNum();
  const arrayToHide = Array.apply(0, Array(10)).map(() => {
    num += magnifier;
    return num;
  });

  const index = getRandomNum(0, arrayToHide.length - 1);
  const answer = arrayToHide[index];
  const hiddenElArray = hideElementInArray(arrayToHide, index);
  return [hiddenElArray, answer];
};

const description = 'What number is missing in the progression?';

const getQuestionAndAnswer = () => {
  const [question, answer] = hiddenElArrayGenerator();
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
