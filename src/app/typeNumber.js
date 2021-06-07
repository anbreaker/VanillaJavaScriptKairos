/**
 * 1) Given an integer return a text "It is even" if it is even and "It is odd" if it is odd.
 */

export class TypeNumber {
  evenOrOdd(num) {
    if (num % 2 === 0) return 'It is even';
    else return 'It is odd';
  }
}
