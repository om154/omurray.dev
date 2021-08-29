import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hellow world', () => {
  render(<App />);
  const linkElement = screen.getByText(/hello world/);
  expect(linkElement).toBeInTheDocument();
});
