import React from 'react';
import FlightList from './FlightList';

function UserPage({ flights, onBook, message }) {
  return (
    <section>
      <h2>Welcome User</h2>
      <p>Choose a flight below and book your ticket.</p>
      <FlightList flights={flights} showBookButton={true} onBook={onBook} />
      {message && <div className="message-box">{message}</div>}
    </section>
  );
}

export default UserPage;
