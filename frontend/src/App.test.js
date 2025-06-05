import { render, screen } from '@testing-library/react';
import App from './App';

test('renders landing page options', () => {
  render(<App />);
  const textElement = screen.getByText(/what would you like to do/i);
  expect(textElement).toBeInTheDocument();
});
