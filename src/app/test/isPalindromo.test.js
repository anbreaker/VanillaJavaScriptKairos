const {
  phrase,
  phraseWithoutSpaces,
  reversePhrase,
  isPalindrome,
} = require('../isPalindromo');

describe('Is Palindrome', () => {
  test('should be string', () => {
    expect(typeof phrase).toBe('string');
    expect(typeof phraseWithoutSpaces).toBe('string');
    expect(typeof reversePhrase).toBe('string');
  });

  test('should be palindrome', () => {
    expect(isPalindrome(phrase)).toBe(true);
  });
  test('should not be palindrome', () => {
    const sentence = 'Cualquier frase casi que se te ocurra';

    expect(isPalindrome(sentence)).toBe(true);
  });
});
