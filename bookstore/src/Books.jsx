import React from 'react';
import BookCard from './BookCard';

function Books({ books, onAdd }) {
  return (
    <div className="container1">
      {Object.keys(books).map(category => (
        <div key={category}>
          <h3>{category}</h3>
          <div className="grid">
            {books[category].map(book => (
              <BookCard key={book.id} book={book} onAdd={onAdd} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Books;