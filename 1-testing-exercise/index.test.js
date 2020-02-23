import { add, subtract, multiply, divide } from './index';

describe('test all the operations', () => {
  it('should return the sum', () => {
    expect(add(1, 2)).toBe(3);
    expect(add(123, 123)).toBe(246);
  });

  it('should return the difference', () => {
    expect(subtract(20, 15)).toBe(5);
    expect(subtract(123, 123)).toBe(0);
  });

  it('should return the product', () => {
    expect(multiply(10, 22)).toBe(220);
    expect(multiply(12, 12)).toBe(144);
  });

  it('should return the quotient', () => {
    expect(divide(100, 2)).toBe(50);
    expect(divide(12, 3)).toBe(4);
  });
});
