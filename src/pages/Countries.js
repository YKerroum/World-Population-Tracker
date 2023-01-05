import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import { getCountryPopulation } from '../redux/countries/countriesSlice';
import CountryCards from '../components/countries/CountryCards';
import NavbarSpace from '../components/NavbarSpace';

const Countries = () => {
  const { continentName } = useParams();
  const [dataShown, setDataShown] = useState(undefined);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCountryPopulation(continentName));
  }, [dispatch, continentName]);

  const { countries, loading } = useSelector((state) => state.countryPopulation);
  const continent = useSelector((state) => state
    .continentsPopulation
    .continents
    .filter((continent) => continent.name === continentName)[0]);

  const handleFilter = (target) => {
    const filteredData = countries.filter((country) => country
      .name
      .toLowerCase()
      .includes(target.toLowerCase()));
    setDataShown(filteredData);
  };

  useEffect(() => {
    setDataShown(countries);
  }, [countries]);

  return (!loading) ? (
    <>
      <NavbarSpace handleSearch={handleFilter} tar="country" />
      {(dataShown && continent) && (
      <>
        <CountryCards countries={dataShown} continent={continent} />
        {!dataShown.length && (
        <>
          <div className="noMatchesFound">
            <span>No matches found!</span>
          </div>
        </>
        )}
      </>
      )}
    </>

  ) : (
    <div
      className="countriesCards"
      style={{
        height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <h1>Loading ...</h1>
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Countries;
