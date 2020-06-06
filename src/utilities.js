const numOfRounds = 3;

const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getRandomNum = (min = 2, max = 99) => Math.floor(Math.random() * (max - min)) + min;

const getRandomExpression = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${num1} ${operator} ${num2}`;
  return expression;
};

const evaluator = (string) => {
  const splitString = string.split(' ');
  const num1 = Number(splitString[0]);
  const operator = splitString[1];
  const num2 = Number(splitString[2]);
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return false;
  }
};

const getGcd = (a, b) => ((a % b) ? getGcd(b, a % b) : Math.abs(b));

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

export {
  isEven, getRandomNum, getRandomExpression, evaluator, getGcd, numOfRounds, hiddenElArrayGenerator,
};
