import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SliderHomepage from './SliderHomepage';
import Navigation from '../Navbar/Navigation';
import SideBar from '../Navbar/SideBar';
import Social from '../Navbar/Social';

function Home() {
  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col md={2} lg={2} className="d-flex flex-column justify-content-between bg-light px-0">
            <Navigation />
            <SideBar />
            <Social />
          </Col>
          <Col md={10} lg={10}>
            <div className="homepage-header-container">
              <h1>Top-rated vacation rentals</h1>
              <p>Find and book unique accommodations</p>
            </div>
            <div>
              <SliderHomepage />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
