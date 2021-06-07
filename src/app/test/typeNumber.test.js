import { TypeNumber } from '../typeNumber';

describe('TypeNumber', () => {
  let typeNumber;

  beforeEach(() => {
    typeNumber = new TypeNumber();
  });

  test('should be even', () => {
    const number = 2;

    const result = typeNumber.evenOrOdd(number);

    expect(result).toBe('It is even');
  });

  test('should be odd', () => {
    const number = 3;

    const result = typeNumber.evenOrOdd(number);

    expect(result).toBe('It is odd');
  });
});
