import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleSearch, tar }) => (
  <input placeholder={`Enter ${tar} to search`} className="searchInput" onChange={(e) => handleSearch(e.target.value)} />
);
Filter.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  tar: PropTypes.string.isRequired,
};

export default Filter;
