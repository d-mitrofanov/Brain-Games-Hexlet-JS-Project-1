const getRandomNum = (min = 1, max = 99) => Math.floor(Math.random() * (max - min)) + min;

export default getRandomNum;
