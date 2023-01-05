import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import NavbarSpace from '../components/NavbarSpace';

test('NavbarSpace renders correctly', () => {
  // Assign
  const tree = renderer
    .create(
      <BrowserRouter>
        <NavbarSpace />
      </BrowserRouter>,
    )
    .toJSON();
    // Assert
  expect(tree).toMatchSnapshot();
});
