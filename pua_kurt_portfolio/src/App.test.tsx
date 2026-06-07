import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  expect(screen.getByText(/Hi, I'm Kurt Pua/i)).toBeInTheDocument();
});
