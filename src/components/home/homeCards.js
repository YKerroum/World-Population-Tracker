import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const HomeCards = ({ continents, world }) => (
  <>
    <div className="homeCards">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{world.name}</h5>
          <p className="card-text">
            {world.population}
            {' '}
            people
          </p>
        </div>
      </div>
      {continents.map((continent) => (
        <Link to={`/${continent.name}`} key={continent.code}>
          <div key={continent.code} className="card">
            <div className="card-body">
              <h5 className="card-title">{continent.name}</h5>
              <p className="card-text">
                {continent.population}
                {' '}
                people
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </>
);

HomeCards.propTypes = {
  continents: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      population: PropTypes.number,
    }),
  ).isRequired,
  world: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    population: PropTypes.number,
  }).isRequired,
};

export default HomeCards;
