import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders the main heading', () => {
    render(<App />);
    const headingElement = screen.getByText(/My Blog/i);
    expect(headingElement).toBeInTheDocument();
  });
});
