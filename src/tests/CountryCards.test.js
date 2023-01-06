import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CountryCards from '../components/countries/CountryCards';

describe('CountryCards', () => {
  test('renders the continent card and a list of country cards', () => {
    const continent = {
      name: 'Africa',
      population: 1216130000,
      image: '/images/africa.jpg',
    };
    const countries = [
      {
        name: 'Nigeria',
        population: 206139589,
        code: 'NG',
      },
      {
        name: 'Egypt',
        population: 102334404,
        code: 'EG',
      },
    ];
    render(<CountryCards countries={countries} continent={continent} />);
    // Check that the continent card is displayed
    expect(screen.getByText(/1216130000 people/i)).toBeInTheDocument();

    // Check that the list of country cards is displayed
    expect(screen.getByText(/206139589 people/i)).toBeInTheDocument();
    expect(screen.getByText(/102334404 people/i)).toBeInTheDocument();
  });
});
