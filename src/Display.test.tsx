import React from 'react';
import { render } from '@testing-library/react';
import Display from './Components/Display';

describe('Display Component', () => {
  test('renders expression and result', () => {
    const { getByText } = render(
      <Display 
        expression="3 + 4" 
        result="7" 
        history={[]} 
      />
    );
    
    expect(getByText('3 + 4')).toBeInTheDocument();
    expect(getByText('7')).toBeInTheDocument();
  });

  test('renders error message when error prop is provided', () => {
    const { getByText } = render(
      <Display 
        expression="3 / 0" 
        result="" 
        history={[]} 
        error="Division by zero"
      />
    );

    expect(getByText('Division by zero')).toBeInTheDocument();
  });

  test('does not render result when error prop is provided', () => {
    const { queryByText } = render(
      <Display 
        expression="3 / 0" 
        result="" 
        history={[]} 
        error="Division by zero"
      />
    );

    expect(queryByText('7')).toBeNull(); // Assuming '7' is the previous result
  });

  test('renders history when history prop is provided', () => {
    const historyItems = ['3 + 4 = 7', '5 - 2 = 3'];
    const { getByText } = render(
      <Display 
        expression="5 - 2" 
        result="3" 
        history={historyItems} 
      />
    );

    expect(getByText('History:')).toBeInTheDocument();
    historyItems.forEach(item => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  test('does not render history when history is empty', () => {
    const { queryByText } = render(
      <Display 
        expression="5 - 2" 
        result="3" 
        history={[]} 
      />
    );

    expect(queryByText('History:')).toBeNull();
  });
});
