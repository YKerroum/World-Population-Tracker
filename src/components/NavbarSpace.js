import React, { useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';
/* React Bootstrap */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { BsSearch } from 'react-icons/bs';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import Filter from './Filter';
import styles from './NavbarSpace.module.css';

function NavbarSpace(props) {
  const { handleSearch, tar } = props;
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);
  return (
    <Navbar expand="sd" variant="dark" className={styles.navbarStyle}>
      <Container fluid className="justify-content-between">
        <IconContext.Provider value={{ color: 'white', size: '1.5em' }}>
          <NavLink to="/" className={tar === 'country' ? 'visible' : 'invisible'}>
            <MdOutlineArrowBackIosNew />
          </NavLink>
          <Navbar.Text>
            {tar === 'country' ? 'Countries' : 'Continents'}
            {' '}
            Population List
          </Navbar.Text>
          <Navbar.Text>
            {showSearch ? (
              <Filter handleSearch={handleSearch} tar={tar} />
            ) : (
              <BsSearch onClick={toggleSearch} />
            )}
          </Navbar.Text>
        </IconContext.Provider>
      </Container>
    </Navbar>
  );
}

NavbarSpace.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  tar: PropTypes.string.isRequired,
};

export default NavbarSpace;
