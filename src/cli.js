import readlineSync from 'readline-sync';

const sayWelcome = () => console.log('Welcome to the Brain Games!');

const askName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

const sayGameRules = (rules) => console.log(rules);

const askQuestion = (number) => console.log(`Question: ${number}`);

const getUserAnswer = () => readlineSync.question('Your answer: ');

export {
  sayWelcome, askName, sayGameRules, askQuestion, getUserAnswer,
};
