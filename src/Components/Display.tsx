import React from 'react';
import { Box, Typography } from '@mui/material';
import styles from './Display.module.scss';

interface DisplayProps {
  expression: string;
  result: string;
  history: string[];
  error?: string | null;
}

const Display: React.FC<DisplayProps> = ({ expression, result, history, error }) => {
  return (
    <Box className={styles.displayContainer}>
      <Typography variant="subtitle1" className={styles.expression}>
        {expression}
      </Typography>
      {error ? (
        <Typography variant="body1" sx={{ color: 'red' }} className={styles.error}>
          {error}
        </Typography>
      ) : (
        <Typography variant="h3" className={styles.result}>
          {result}
        </Typography>
      )}
      {history.length > 0 && (
        <Box className={styles.historyContainer}>
          <Typography variant="subtitle2" className={styles.historyTitle}>
            History:
          </Typography>
          <ul className={styles.historyList}>
            {history.map((item, index) => (
              <li key={index} className={styles.historyItem}>
                {item}
              </li>
            ))}
          </ul>
        </Box>
      )}
    </Box>
  );
};

export default Display;
