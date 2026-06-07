import { render, screen } from '@testing-library/react';
import { ThemeProvider } from './context/ThemeContext';
import App from './App';

test('renders portfolio masthead and hero heading', () => {
  render(
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
  expect(
    screen.getByRole('heading', { level: 1, name: /The Kurt Pua Tribune/i })
  ).toBeInTheDocument();
  expect(
    screen.getByText(/Kurt Pua builds software for real users and clients/i)
  ).toBeInTheDocument();
  expect(screen.getAllByRole('link', { name: /View CV/i }).length).toBeGreaterThan(0);
  expect(screen.getByRole('link', { name: /Skills/i })).toBeInTheDocument();
});
