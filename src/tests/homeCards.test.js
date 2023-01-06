import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import HomeCards from '../components/home/homeCards';
import '@testing-library/jest-dom/extend-expect';

test('HomeCards component renders with correct data', () => {
  const continents = [
    {
      code: 'AF',
      name: 'Africa',
      image: 'africa.jpg',
      population: 1216130000,
    },
    {
      code: 'AS',
      name: 'Asia',
      image: 'asia.jpg',
      population: 454502000,
    },
  ];
  const world = {
    name: 'World',
    population: 779000000,
    image: 'world.jpg',
  };

  const { getByText } = render(
    <Router>
      <HomeCards continents={continents} world={world} />
    </Router>,
  );
  expect(getByText('Africa')).toBeInTheDocument();
  expect(getByText('1216130000 people')).toBeInTheDocument();
  expect(getByText('Asia')).toBeInTheDocument();
  expect(getByText('454502000 people')).toBeInTheDocument();
  expect(getByText('World')).toBeInTheDocument();
  expect(getByText('779000000 people')).toBeInTheDocument();
});
