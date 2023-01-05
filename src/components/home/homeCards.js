import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from './homeCards.module.css';

const HomeCards = ({ continents, world }) => {
  const colors = ['#3E62A4', '#4369B0'];

  return (
    <>
      <div className="homeCards">
        <Row className="p-0 m-0">
          <Col xs={12} className="p-0 m-0 w-100">
            <Card className={`d-flex flex-row rounded-0 text-white ${styles.mainCard}`}>
              <Col xs={6}>
                <Card.Img src={world.image} alt="world image" />
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
        <Row className="p-0 m-0" style={{ backgroundColor: colors[0] }}>
          <h6 className={`text-white ${styles.titles}`}>Stats by continent</h6>
        </Row>
        {continents.map((continent, index) => (
          <>
            {(index % 2 === 0) && (colors.reverse()
            && (
            <Row xs={12} className="p-0 m-0" key={continent.code} style={{ maxHeight: '300px' }}>
              <Col xs={6} key={continent.code} className="p-0">
                <Link to={`/${continent.name}`} style={{ textDecoration: 'none' }} className="text-white">
                  <Card key={continent.code} className={`rounded-0 border-0 ${styles.cards}`} style={{ backgroundColor: colors[index % 2], width: '100%', height: '100%' }}>
                    <Card.Img src={continent.image} variant="top" alt={continent.name} style={{ width: '100%', maxHeight: '200px' }} />
                    <Card.Body style={{ textAlign: 'right' }}>
                      <Card.Title className={styles.titles}>{continent.name}</Card.Title>
                      <Card.Text>
                        {continent.population}
                        {' '}
                        people
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Link>
              </Col>
              {(index + 1 < continents.length) && (
              <Col xs={6} key={continents[index + 1].code} className="p-0 m-0">
                <Link to={`/${continents[index + 1].name}`} style={{ textDecoration: 'none' }} className="text-white">
                  <Card key={continents[index + 1].code} className={`rounded-0 border-0 ${styles.cards}`} style={{ backgroundColor: colors[(index + 1) % 2], width: '100%' }}>
                    <Card.Img src={continents[index + 1].image} variant="top" alt={continents[index + 1].name} style={{ width: '100%', maxHeight: '200px' }} />
                    <Card.Body style={{ textAlign: 'right' }}>
                      <Card.Title
                        className={styles.titles}
                      >
                        {
                      continents[index + 1].name
                      }
                      </Card.Title>
                      <Card.Text>
                        {continents[index + 1].population}
                        {' '}
                        people
                      </Card.Text>
                    </Card.Body>
                  </Card>
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
      image: PropTypes.string,
    }),
  ).isRequired,
  world: PropTypes.shape({
    code: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    population: PropTypes.number,
    image: PropTypes.string,
  }).isRequired,
};

export default HomeCards;
