import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div className="book-item">
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt={book.volumeInfo.title} />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
      <p>{book.volumeInfo.publishedDate}</p>
      <p>{book.volumeInfo.description}</p>
    </div>
  );
};

export default BookItem;
