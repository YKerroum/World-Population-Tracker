import React, { useState } from 'react';
import {
  NavLink,
} from 'react-router-dom';
/* React Bootstrap */
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css';
import { TbMapSearch } from 'react-icons/tb';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';
import Filter from './Filter';

function NavbarSpace(props) {
  const { handleSearch, tar } = props;
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => setShowSearch(!showSearch);
  return (
    <Navbar expand="sd">
      <Container fluid>
        {tar === 'country' ? (
          <IconContext.Provider value={{ color: 'white', size: '2em' }}>
            <NavLink to="/">
              <MdOutlineArrowBackIosNew />
            </NavLink>
          </IconContext.Provider>
        ) : ('')}
        <Navbar.Text>
          {showSearch ? (
            <Filter handleSearch={handleSearch} tar={tar} />
          ) : (
            <TbMapSearch onClick={toggleSearch} />
          )}
        </Navbar.Text>
      </Container>
    </Navbar>
  );
}

NavbarSpace.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  tar: PropTypes.string.isRequired,
};

export default NavbarSpace;
