import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  if (!Array.isArray(books)) {
    // Handle case where books is not an array
    return <p>No books found</p>;
  }

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

