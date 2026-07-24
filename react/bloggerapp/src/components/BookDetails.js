import React from 'react';
import BookCard from './BookCard';

function BookDetails() {
  const books = [
    { id: 1, title: 'React Essentials', author: 'Sophie Green', price: '$24.99' },
    { id: 2, title: 'JavaScript Design', author: 'Ethan Brown', price: '$18.50' },
    { id: 3, title: 'CSS Mastery', author: 'Liam Gray', price: '$15.99' },
    { id: 4, title: 'Frontend Patterns', author: 'Mia Clark', price: '$22.00' },
    { id: 5, title: 'UI Components', author: 'Noah Miller', price: '$19.75' }
  ];

  return (
    <section>
      <h2 className="details-title">Book Details</h2>
      <div className="card-list">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </section>
  );
}

export default BookDetails;
