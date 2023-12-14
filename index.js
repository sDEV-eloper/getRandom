// Utility function to generate a random integer within a range
const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomString = (length, characters) => {
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = getRandomInteger(0, characters.length - 1);
    randomString += characters.charAt(randomIndex);
  }
  return randomString;
};

export const randomNumber = (n) => getRandomInteger(10 ** (n - 1), 10 ** n - 1);
export const randomNumberRange = (a, b) => getRandomInteger(a,b);
export const randomMixString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz');
export const randomMixNumString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
export const randomCapitalString = (length) => getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
export const randomSmallString = (length) => getRandomString(length, 'abcdefghijklmnopqrstuvwxyz');
export const randomAllMixString = (length) => {
    const specialCharacters = '!@#$%^&*()-_=+[]{}|;:,.<>?';
    return getRandomString(length, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789' + specialCharacters);
  };
