import { render, screen } from '@testing-library/react';
import Midle from './myfiles/Midle';

test('renders education section heading', () => {
  render(<Midle />);
  const headingElement = screen.getByText(/About/i);
  expect(headingElement).toBeInTheDocument();
});
