/*
 * 2) Realiza una función que valide un DNI con las siguientes reglas:
 *     - El número y la letra tienen que formar siempre 9 caracteres.
 *     - La letra debe ser correcta aplicando el conocido algoritmo.
 *     - Devolver una estructura indicando el resultado de la verificación, y el motivo del error si lo hubiera.
 * */

const DIGITS_DNI = 9;

// prettier-ignore
const dniLetters = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F',
                    'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 
                    'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

const isDNI = (dni) => {
  if (isLength9(dni)[1][0] && onlyLetter(dni)[1] && isCorrectLetter(dni)) {
    return console.log({
      isValid: true,
      error: '',
    });
  } else {
    return console.log({
      isValid: false,
      error: 'error',
    });
  }
};

const isLength9 = (dni) => {
  if (dni.length === DIGITS_DNI) {
    return [dni.length, onlyNumber(dni)];
  } else return [false, console.log('The number must be 9 digits long.')];
};

const onlyNumber = (dni) => {
  const number = dni.slice(0, DIGITS_DNI - 1);

  if (isNaN(number)) return [false, console.log('The first 8 digits must be a number.')];
  else return [true, number];
};

const onlyLetter = (dni) => {
  const letter = dni.charAt(DIGITS_DNI - 1);
  const letterDNI = letter.toUpperCase();

  const isLetterCorrect = dniLetters.includes(letterDNI);

  if (!isLetterCorrect) return [false, console.log('The letter must be allowed')];
  else return [true, letterDNI];
};

const isCorrectLetter = (dni) => {
  const existLetter = dniLetters.includes(onlyLetter(dni)[1]);

  let letter;
  if (existLetter) {
    letter = onlyNumber(dni)[1] % 23;

    if (dniLetters[letter] === onlyLetter(dni)[1]) return [true, letter];
    else [false, console.log('The letter does not correspond to the number')];
  }
};

isDNI('46393454Q');

module.exports = {
  DIGITS_DNI,
  dniLetters,
  isDNI,
  isLength9,
  onlyNumber,
  onlyLetter,
  isCorrectLetter,
};
