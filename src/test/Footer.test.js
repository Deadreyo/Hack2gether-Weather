import { render, screen } from '@testing-library/react';
import Footer from '../Components/Footer/Footer';
import logo from '../assets/img/mlh-prep.png';

describe('Footer Component', () => {
  it('should render the site footer', () => {
    render(<Footer />);
    expect(screen.getByText('© 2022 Hack2Together')).toBeInTheDocument();
    expect(screen.getByAltText('MLH Prep Logo')).toBeInTheDocument();
    expect(screen.getByAltText('MLH Prep Logo')).toHaveAttribute('src', logo);
  })
})
