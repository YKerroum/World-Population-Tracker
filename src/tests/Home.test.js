import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import Home from '../pages/Home';

describe('Home component', () => {
  it('should render the component correctly', () => {
    const store = {
      getState: () => ({
        continentsPopulation: {
          continents: [
            { name: 'Africa', population: 123456 },
            { name: 'North America', population: 987654 },
            { name: 'South America', population: 456789 },
          ],
          world: [{ population: 7777777 }],
          loading: false,
        },
      }),
      subscribe: () => {},
      dispatch: () => {},
    };

    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Home />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
