import { render, screen } from '@testing-library/react';
import App from './App';

test('renders calculator app title', () => {
  render(<App />);
  const titleElement = screen.getByText(/calculator app/i);
  expect(titleElement).toBeInTheDocument();
});
