import React from 'react';
import renderer from 'react-test-renderer';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Countries from '../pages/Countries';

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
  useLocation: jest.fn(),
}));

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(() => jest.fn()),
}));

describe('Countries component', () => {
  it('should render correctly when loading is true', () => {
    useParams.mockImplementation(() => ({
      continentName: 'Africa',
    }));
    useSelector.mockImplementation(() => ({
      countries: [],
      loading: true,
    }));

    const tree = renderer.create(<Countries />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
