const isEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const getRandomNum = () => {
  const min = Math.ceil(2);
  const max = Math.floor(99);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomExpression = () => {
  const num1 = getRandomNum();
  const num2 = getRandomNum();
  const operators = ['+', '-', '*'];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const expression = `${num1} ${operator} ${num2}`;
  // console.log(expression);
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

export {
  isEven, getRandomNum, getRandomExpression, evaluator,
};
