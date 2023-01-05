import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import worldPic from '../../assets/world.svg';
import AFR from '../../assets/africa.svg';
import LCN from '../../assets/s-america.svg';
import NAC from '../../assets/n_america.svg';
import EUR from '../../assets/europe.svg';
import OCE from '../../assets/oceania.svg';
import ASI from '../../assets/asia.svg';
import styles from './homeCards.module.css';

const HomeCards = ({ continents, world }) => {
  const images = {
    AFR,
    LCN,
    NAC,
    EUR,
    OCE,
    ASI,
  };

  const colors = ['#3E62A4', '#4369B0'];

  return (
    <>
      <div className="homeCards">
        <Row>
          <Col xs={12}>
            <Card className={`d-flex flex-row rounded-0 text-white ${styles.mainCard}`}>
              <Col xs={6}>
                <Card.Img src={worldPic} alt="world image" />
              </Col>
              <Col xs={6} className="align-self-center">
                <Card.Body>
                  <Card.Title className={styles.titles}>{world.name}</Card.Title>
                  <Card.Text>
                    {world.population}
                    {' '}
                    people
                  </Card.Text>
                </Card.Body>
              </Col>
            </Card>
          </Col>
        </Row>
        {continents.map((continent, index) => (
          <>
            {(index % 2 === 0) && (colors.reverse()
            && (
            <Row xs={12} key={continent.code}>
              <Col xs={6} key={continent.code} className="p-0">
                <Link to={`/${continent.name}`} style={{ textDecoration: 'none' }} className="text-white">
                  <div key={continent.code} className="card rounded-0 border-0" style={{ backgroundColor: colors[index % 2] }}>
                    <img src={images[continent.code]} className="card-img-top" alt={continent.name} />
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
              </Col>
              {(index + 1 < continents.length) && (
              <Col xs={6} key={continents[index + 1].code} className="p-0">
                <Link to={`/${continents[index + 1].name}`} style={{ textDecoration: 'none' }} className="text-white">
                  <div key={continents[index + 1].code} className="card rounded-0 border-0" style={{ backgroundColor: colors[(index + 1) % 2] }}>
                    <img src={images[continents[index + 1].code]} className="card-img-top" alt={continents[index + 1].name} />
                    <div className="card-body">
                      <h5 className="card-title">{continents[index + 1].name}</h5>
                      <p className="card-text">
                        {continents[index + 1].population}
                        {' '}
                        people
                      </p>
                    </div>
                  </div>
                </Link>
              </Col>
              )}
            </Row>
            )
            )}
          </>
        ))}
      </div>
    </>
  );
};

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
