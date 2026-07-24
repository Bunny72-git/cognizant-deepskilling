import React from 'react';

function BookCard({ book }) {
  return (
    <div className="card">
      <h3>{book.title}</h3>
      <p><span className="label">Author:</span> {book.author}</p>
      <p><span className="label">Price:</span> {book.price}</p>
    </div>
  );
}

export default BookCard;
