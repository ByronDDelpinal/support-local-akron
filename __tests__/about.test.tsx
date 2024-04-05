import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import About from '@/app/about/page';

describe('About Page', () => {
  it('renders a heading', () => {
    render(<About />);

    const heading = screen.getByRole('heading', { level: 4 });

    expect(heading).toBeInTheDocument();
  });
});
