import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app title and welcome text', () => {
  render(<App />);

  expect(screen.getByText(/vonnipay/i)).toBeInTheDocument();
  expect(screen.getByText(/salom/i)).toBeInTheDocument();
});
