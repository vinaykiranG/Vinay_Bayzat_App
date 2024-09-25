import BigNumber from 'bignumber.js';

type Operator = '+' | '-' | '*' | '/';

export const performOperation = (a: BigNumber, b: BigNumber, operator: Operator): BigNumber => {
  switch (operator) {
    case '+':
      return a.plus(b);
    case '-':
      return a.minus(b);
    case '*':
      return a.multipliedBy(b);
    case '/':
      if (b.isZero()) {
        throw new Error('Division by zero');
      }
      return a.dividedBy(b);
    default:
      throw new Error('Invalid operator');
  }
};

export const formatNumber = (num: BigNumber): string => {
  return num.toFixed(); // Ensure it formats to a full number string
};

export const evaluateExpression = (expression: string): BigNumber => {
  const outputQueue: (BigNumber | Operator)[] = [];
  const operatorStack: (Operator | '(' | ')')[] = []; // Updated type for operatorStack
  const operators: Record<Operator, { precedence: number; associativity: 'Left' | 'Right' }> = {
    '+': { precedence: 2, associativity: 'Left' },
    '-': { precedence: 2, associativity: 'Left' },
    '*': { precedence: 3, associativity: 'Left' },
    '/': { precedence: 3, associativity: 'Left' },
  };

  // Tokenize the expression
  const tokens = expression.match(/(\d+(\.\d+)?)|[+\-*/()]/g);
  if (!tokens) {
    throw new Error('Invalid expression');
  }

  tokens.forEach(token => {
    if (!isNaN(Number(token))) {
      outputQueue.push(new BigNumber(token));
    } else if (token in operators) {
      const o1 = token as Operator;
      while (
        operatorStack.length &&
        operators[operatorStack[operatorStack.length - 1] as Operator]?.precedence >= operators[o1].precedence
      ) {
        outputQueue.push(operatorStack.pop() as Operator);
      }
      operatorStack.push(o1);
    } else if (token === '(') {
      operatorStack.push(token);
    } else if (token === ')') {
      while (operatorStack.length && operatorStack[operatorStack.length - 1] !== '(') {
        outputQueue.push(operatorStack.pop() as Operator);
      }
      operatorStack.pop(); // Remove the '(' from the stack
    }
  });

  while (operatorStack.length) {
    outputQueue.push(operatorStack.pop() as Operator);
  }

  const stack: BigNumber[] = [];
  outputQueue.forEach(token => {
    if (token instanceof BigNumber) {
      stack.push(token);
    } else {
      const b = stack.pop();
      const a = stack.pop();
      if (a === undefined || b === undefined) {
        throw new Error('Invalid expression');
      }
      const result = performOperation(a, b, token as Operator);
      stack.push(result);
    }
  });

  if (stack.length !== 1) {
    throw new Error('Invalid expression');
  }

  return stack[0];
};
