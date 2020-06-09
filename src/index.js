import readlineSync from 'readline-sync';

const numOfRounds = 3;

const convertResult = (result, userAnswer) => (typeof (result) === 'number' ? Number(userAnswer) : userAnswer);

const startGame = (getNumberAndResult, description) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(description);
  for (let i = 0; i < numOfRounds;) {
    const [question, answer] = getNumberAndResult();
    console.log(`Question: ${question}`);
    const getUserAnswer = () => readlineSync.question('Your answer: ');
    const userAnswer = convertResult(answer, getUserAnswer());
    if (userAnswer === answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${answer}. Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratualtions ${userName}!`);
};

export default startGame;
