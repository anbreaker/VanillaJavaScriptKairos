const {
  DIGITS_DNI,
  dniLetters,
  isDNI,
  isLength9,
  onlyNumber,
  onlyLetter,
  isCorrectLetter,
} = require('../isDNI');

describe('DNI verification tests', () => {
  const validDNI = '46393454Q';

  test('Should be number must be 9 digits long.', () => {
    expect(isLength9(validDNI)[0]).toEqual(DIGITS_DNI);
  });

  test('Should be first 8 digits must be a number.', () => {
    expect(onlyNumber(validDNI)[0]).toEqual(isNaN(validDNI));
  });

  test('Should be letter must be allowed.', () => {
    const validLetter = onlyLetter(validDNI)[1];

    expect(dniLetters.includes(validLetter)).toBe(true);
  });
});
