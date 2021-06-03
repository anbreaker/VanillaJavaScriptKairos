import { Calc } from './calc';

describe('Calc', () => {
  let calc;
  beforeEach(() => {
    calc = new Calc();
  });

  test('should add', () => {
    const oper1 = 3;
    const oper2 = 4;

    const result = calc.add(oper1, oper2);

    expect(result).toBe(7);
  });

  test('should minus', () => {
    const oper1 = 3;
    const oper2 = 4;

    const result = calc.minus(oper1, oper2);

    expect(result).toBe(-1);
  });
});
