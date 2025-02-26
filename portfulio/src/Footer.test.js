import { render, screen } from '@testing-library/react';
import Footer from './myfiles/Footer';

test('renders author name in footer', () => {
  render(<Footer />);
  const author = screen.getByText(/Abdessamad Achehrour/i);
  expect(author).toBeInTheDocument();
});
