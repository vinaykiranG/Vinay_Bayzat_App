import React, { useState } from 'react';
import { Container, Typography, Switch } from '@mui/material';
import Calculator from './Components/Calculator';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Container
      sx={{
        backgroundColor: darkMode ? '#303030' : '#f5f5f5',
        minHeight: '100vh',
        padding: '20px',
        color: darkMode ? '#ffffff' : '#000000',
      }}
    >
      <Typography variant="h5" align="center" gutterBottom mt={5}>
        Vinay - BAYZAT - Calculator App (React TypeScript Webpack)
      </Typography>
      <Typography align="center">
        Dark Mode
        <Switch
          checked={darkMode}
          onChange={toggleDarkMode}
          color="default"
        />
      </Typography>
      <Calculator darkMode={darkMode} />
    </Container>
  );
};

export default App;
