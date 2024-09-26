import React, { useState } from 'react';
import { Box } from '@mui/material';
import Display from './Display';
import Keypad from './keypad';
import { evaluateExpression, formatNumber } from '../utils/Calculator';
import BigNumber from 'bignumber.js';
import styles from './Calculator.module.scss';

interface CalculatorProps {
  darkMode: boolean;
}

const Calculator: React.FC<CalculatorProps> = ({ darkMode }) => {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [memory, setMemory] = useState<BigNumber>(new BigNumber(0));
  const [history, setHistory] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleButtonClick = (value: string) => {
    setError(null);
    try {
      if (value === 'C') {
        setExpression('');
        setResult('0');
      } else if (value === 'CE') {
        setExpression(expression.slice(0, -1));
      } else if (value === '=') {
        const evalResult = evaluateExpression(expression);
        setResult(formatNumber(evalResult));
        setHistory([`${expression} = ${formatNumber(evalResult)}`, ...history].slice(0, 10));
        setExpression(formatNumber(evalResult).toString());
      } else if (value === 'M+') {
        const currentResult = new BigNumber(result);
        setMemory(memory.plus(currentResult));
      } else if (value === 'M-') {
        const currentResult = new BigNumber(result);
        setMemory(memory.minus(currentResult));
      } else if (value === 'MR') {
        setExpression(expression + formatNumber(memory));
      } else if (value === 'MC') {
        setMemory(new BigNumber(0));
      } else if (value === '√') {
        const number = evaluateExpression(expression);
        if (number.isNegative()) {
          throw new Error('Invalid Input');
        }
        const sqrtResult = number.squareRoot();
        setResult(formatNumber(sqrtResult));
        setHistory([`√(${expression}) = ${formatNumber(sqrtResult)}`, ...history].slice(0, 10));
        setExpression(formatNumber(sqrtResult).toString());
      } else if (value === '%') {
        const number = evaluateExpression(expression);
        const percentage = number.dividedBy(100);
        setResult(formatNumber(percentage));
        setHistory([`${expression} % = ${formatNumber(percentage)}`, ...history].slice(0, 10));
        setExpression(formatNumber(percentage).toString());
      } else {
        setExpression(expression + value);
      }
    } catch (err: any) {
      setError(err.message);
      setResult('0');
    }
  };

  return (
    <Box className={styles.calculatorContainer} sx={{ backgroundColor: darkMode ? '#424242' : '#ffffff' }}>
      <Display expression={expression} result={result} history={history} error={error} />
      <Box mt={2}>
        <Keypad onButtonClick={handleButtonClick} darkMode={darkMode} />
      </Box>
    </Box>
  );
};

export default Calculator;
