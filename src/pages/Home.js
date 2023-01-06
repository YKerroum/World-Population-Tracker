import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Spinner from 'react-bootstrap/Spinner';
import HomeCards from '../components/home/homeCards';
import NavbarSpace from '../components/NavbarSpace';

const Home = () => {
  const { continents, world, loading } = useSelector((state) => state.continentsPopulation);
  const [dataShown, setDataShown] = useState(undefined);
  const handleFilter = (target) => {
    const filteredData = continents.filter((continent) => continent
      .name
      .toLowerCase()
      .includes(target.toLowerCase()));
    setDataShown(filteredData);
  };
  useEffect(() => {
    setDataShown(continents);
  }, [continents]);

  return (!loading) ? (
    <>
      <NavbarSpace handleSearch={handleFilter} tar="continent" />
      {(dataShown && world.length) && (
      <>

        <HomeCards continents={dataShown} world={world[0]} />
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
      className="homeCards"
      style={{
        height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}
    >
      <h1>Loading ...</h1>
      <Spinner animation="grow" variant="info" />
    </div>
  );
};

export default Home;
