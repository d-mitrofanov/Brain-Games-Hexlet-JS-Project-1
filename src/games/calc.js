import getRandomNum from '../getRandomNum.js';
import startGame from '../index.js';

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

const description = 'What is the result of the expression?';

const getQuestionAndAnswer = () => {
  const question = getRandomExpression();
  const answer = evaluator(question);
  return [question, answer];
};

const start = () => startGame(getQuestionAndAnswer, description);

export default start;
