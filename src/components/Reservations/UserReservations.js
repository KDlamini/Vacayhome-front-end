import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { fetchReservations } from '../../redux/reservations/reservation';
import { fetchRooms } from '../../redux/rooms/rooms';
import SingleReservation from './SingleReservation';
import SideBar from '../Navbar/SideBar';

const UserReservations = () => {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (loading === true) {
      dispatch(fetchRooms());
      dispatch(fetchReservations());
      setLoading(true);
    }
  }, []);

  const rooms = useSelector((state) => state.roomsReducer);
  const reservations = useSelector((state) => state.reservationsReducer);

  const { userid } = useParams();

  return (
    <>
      <Container fluid>
        <Row className="homepage-container bg-white">
          <Col md={2} lg={2} className="nav-panel d-flex flex-column justify-content-between bg-light px-0">
            <SideBar />
          </Col>
          <Col md={10} lg={10} className="content-panel">
            <h1 className="text-center m-4">Reservations</h1>
            <div className="reservations-container">
              {
              reservations.map((reservation) => (
                reservation.user_id === parseInt(userid, 10)
                && (
                <SingleReservation
                  rooms={rooms}
                  reservation={reservation}
                  key={reservation.id}
                />
                )
              ))
            }
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
};

export default UserReservations;
