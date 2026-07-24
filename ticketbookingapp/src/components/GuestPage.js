import React from 'react';
import FlightList from './FlightList';

function GuestPage({ flights }) {
  return (
    <section>
      <h2>Guest User</h2>
      <p>Only browsing is available. Please log in to book tickets.</p>
      <FlightList flights={flights} showBookButton={false} />
    </section>
  );
}

export default GuestPage;
