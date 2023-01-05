import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Filter from '../components/Filter';

test('Filter renders correctly', () => {
  // Assign
  const tree = renderer
    .create(
      <BrowserRouter>
        <Filter />
      </BrowserRouter>,
    )
    .toJSON();
    // Assert
  expect(tree).toMatchSnapshot();
});
