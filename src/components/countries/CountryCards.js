import React from 'react';
import PropTypes from 'prop-types';

const CountryCards = ({ countries, continent }) => (
  <>
    <h1 className="continentName">{continent.name}</h1>
    <h2 className="continentPopulation">
      {continent.population}
      {' '}
      people
    </h2>
    <div className="countriesCards">
      {countries.map((country) => (
        <div key={country.code} className="card">
          <div className="card-body">
            <h5 className="card-title">{country.name}</h5>
            <p className="card-text">
              {country.population}
              {' '}
              people
            </p>
          </div>
        </div>
      ))}
    </div>
  </>
);

CountryCards.propTypes = {
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      code: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      population: PropTypes.number,
    }),
  ).isRequired,
  continent: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    population: PropTypes.number,
  }).isRequired,
};

export default CountryCards;
