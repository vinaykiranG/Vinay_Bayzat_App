import React from 'react';
import { Button } from '@mui/material';
import styles from './Keypad.module.scss';

interface KeypadProps {
  onButtonClick: (value: string) => void;
  darkMode: boolean;
}

const buttons: string[] = [
  'MC', 'MR', 'M+', 'M-',
  'C', 'CE', '√', '%',
  '7', '8', '9', '/',
  '4', '5', '6', '*',
  '1', '2', '3', '-',
  '0', '.', '=', '+',
];

const Keypad: React.FC<KeypadProps> = ({ onButtonClick, darkMode }) => {
  return (
    <div className={styles.keypadContainer}>
      {buttons.map((btn) => (
        <Button
          key={btn}
          variant="contained"
          sx={{
            height: '34px',
            fontSize: '1rem',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            backgroundColor: darkMode
              ? ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                ? '#fbc02d'
                : '#757575'
              : ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                ? '#f9a825'
                : '#e0e0e0',
            color: darkMode
              ? ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                ? '#000000'
                : '#ffffff' 
              : ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                ? '#ffffff'
                : '#000000',
            '&:hover': {
              backgroundColor: darkMode
                ? ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                  ? '#f9a825'
                  : '#616161'
                : ['C', 'CE', '=', '/', '*', '-', '+', 'MC', 'MR', 'M+', 'M-', '√', '%'].includes(btn)
                  ? '#f57f17'
                  : '#d5d5d5',
            },
          }}
          onClick={() => onButtonClick(btn)}
        >
          {btn}
        </Button>
      ))}
    </div>
  );
};

export default Keypad;
