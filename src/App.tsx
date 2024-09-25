import React from 'react';
import { Container, Typography } from '@mui/material';
import Calculator from './Components/Calculator';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h5" align="center" gutterBottom mt={5}>
        Vinay - BAYZAT - Calculator App (React TypeScript Webpack)
      </Typography>
      <Calculator />
    </Container>
  );
};

export default App;
