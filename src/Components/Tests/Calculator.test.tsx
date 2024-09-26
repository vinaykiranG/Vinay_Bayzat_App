import BigNumber from 'bignumber.js';
import { performOperation, evaluateExpression, formatNumber } from '../../utils/Calculator';

describe('Calculator Functions', () => {
  describe('performOperation', () => {
    test('adds positive numbers correctly', () => {
      expect(performOperation(new BigNumber(1), new BigNumber(2), '+').toString()).toBe('3');
    });

    test('subtracts negative numbers correctly', () => {
      expect(performOperation(new BigNumber(-1), new BigNumber(-2), '-').toString()).toBe('1');
    });

    test('handles floating-point arithmetic correctly', () => {
      expect(performOperation(new BigNumber(0.1), new BigNumber(0.2), '+').toString()).toBe('0.3');
    });

    test('throws error on division by zero', () => {
      expect(() => performOperation(new BigNumber(1), new BigNumber(0), '/')).toThrow('Division by zero');
    });
  });

  describe('evaluateExpression', () => {
    test('evaluates simple addition correctly', () => {
      expect(evaluateExpression('2 + 3').toString()).toBe('5');
    });

    test('evaluates expression with multiple operators correctly', () => {
      expect(evaluateExpression('2 + 3 * 4').toString()).toBe('14');
    });

    test('evaluates expression with parentheses correctly', () => {
      expect(evaluateExpression('(2 + 3) * 4').toString()).toBe('20');
    });

    test('throws error on invalid expression', () => {
      expect(() => evaluateExpression('2 +')).toThrow('Invalid expression');
    });

    test('evaluates complex expression correctly', () => {
      expect(evaluateExpression('2 + 3 * (4 - 2)').toString()).toBe('8');
    });
  });

  describe('formatNumber', () => {
    test('formats number correctly', () => {
      expect(formatNumber(new BigNumber(12345.678)).toString()).toBe('12345.678');
    });

    test('formats large number correctly', () => {
      expect(formatNumber(new BigNumber('1000000000000')).toString()).toBe('1000000000000');
    });
  });
});
