import React from 'react';
import './bookcard.css';

function BookCard({ book, onAdd }) {
  return (
    <div className="card">
      <img src={book.image} alt={book.title} />
      <h4>{book.title}</h4>
      <p>{book.author}</p>
      <p>${book.price}</p>
      <button className='button10' onClick={() => onAdd(book)}>Add to Cart</button>
    </div>
  );
}

export default BookCard;