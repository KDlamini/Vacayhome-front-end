import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Homepage/Home';
import Login from './components/LoginRegister/Login';
import Register from './components/LoginRegister/Register';
import Reservantion from './components/Reservations/Reservation';
import UserReservations from './components/Reservations/UserReservations';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path=":userid/:houseid/reservation" element={<Reservantion />} />
        <Route path=":userid/reservations" element={<UserReservations />} />
      </Routes>
    </main>
  );
}

export default App;
