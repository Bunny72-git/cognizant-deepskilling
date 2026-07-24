import React from 'react';

function FlightList({ flights, showBookButton, onBook }) {
  return (
    <div className="flight-list">
      {flights.map(flight => (
        <div key={flight.id} className="flight-card">
          <div className="flight-details">
            <strong>{flight.name}</strong>
            <span>{flight.route}</span>
            <span>{flight.time}</span>
          </div>
          {showBookButton && (
            <button className="book-button" onClick={onBook}>
              Book Ticket
            </button>
          )}
        </div>
      ))}
    </div>
  );
}

export default FlightList;
