/**
 * 3) Dada una frase indicar si se trata de un palíndromo es decir, que se puede leer
 *    igual de derecha a izquierda que de izquierda a derecha, devolver un texto con
 *    el resultado de la verificación. "Es palíndromo" o "No es palíndromo".
 *
 *    Ejemplos:
 *      Es palíndromo: "Logra Casillas allí sacar gol", "Yo dono rosas, oro no doy"
 *      No es palíndromo: "Cualquier frase casi que se te ocurra"
 */

const phrase = 'Logra Casillas allí sacar gol'; // true
// const phrase = 'Cualquier frase casi que se te ocurra'; // false

// Eliminate blank spaces, and Normalize text
const phraseWithoutSpaces = phrase
  .replace(/ /g, '')
  .normalize('NFD')
  .replace(/[\u0300-\u036f]/g, '')
  .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
  .toLowerCase();

// Reverse phrase
const reversePhrase = phraseWithoutSpaces.split('').reverse().join('');

const isPalindrome = (sentence) => {
  for (let i = 0; i < sentence.length; i++) {
    if (phraseWithoutSpaces === reversePhrase) {
      console.log('Is palindrome');
      return true;
    } else {
      console.log('Not Is palindrome');
      return false;
    }
  }
};

isPalindrome(phrase);

module.exports = {
  phrase,
  phraseWithoutSpaces,
  reversePhrase,
  isPalindrome,
};
