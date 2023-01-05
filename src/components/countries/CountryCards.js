import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './CountryCards.module.css';

const colors = ['#3E62A4', '#4369B0'];

const CountryCards = ({ countries, continent }) => (
  <>
    <Row className="p-0 m-0">
      <Col xs={12} className="p-0 m-0 w-100">
        <Card className={`d-flex flex-row rounded-0 text-white ${styles.mainCard}`}>
          <Col xs={6}>
            <Card.Img src={continent.image} alt="continent image" />
          </Col>
          <Col xs={6} className="align-self-center">
            <Card.Body>
              <Card.Title className={styles.titles}>{continent.name}</Card.Title>
              <Card.Text>
                {continent.population}
                {' '}
                people
              </Card.Text>
            </Card.Body>
          </Col>
        </Card>
      </Col>
    </Row>
    <div className="countriesCards">
      {countries.map((country, index) => (
        <Card key={country.code} className={`rounded-0 text-white ${styles.cards}`} style={{ backgroundColor: colors[index % 2] }}>
          <Card.Body className="d-flex flex-row justify-content-between">
            <Card.Title className={styles.titles}>{country.name}</Card.Title>
            <Card.Text>
              {country.population}
              {' '}
              people
            </Card.Text>
          </Card.Body>
        </Card>
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
    image: PropTypes.string,
  }).isRequired,
};

export default CountryCards;
