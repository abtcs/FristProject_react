import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the shop heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/my tech shop/i);
  expect(headingElement).toBeInTheDocument();
});
