
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomString = (length, characters) => {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInteger(0, characters.length - 1);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

 const randomNumber = (n) => getRandomInteger(10 ** (n - 1), 10 ** n - 1);
 const randomNumberRange = (a, b) => getRandomInteger(a,b);
 const randomMixString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
 const randomMixNumString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
 const randomCapitalString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
 const randomSmallString = (length) => getRandomString(length, 'abcdefghijklmnopqrstuvwxyz');
const randomAllMixString = (length) => {
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    return getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specialCharacters);
  };

  module.exports={randomAllMixString, randomCapitalString, randomMixNumString, randomNumber, randomSmallString, randomCapitalString, randomNumberRange}
