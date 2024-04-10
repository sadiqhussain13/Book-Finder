import React, { useState } from 'react';
import BookSearch from '../components/BookSearch';
import BookList from '../components/BookList';

const Home = () => {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []); // Set fetched books in state or empty array if no books found
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="home-page">
      <h1>Book Finder</h1>
      <BookSearch onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
};

export default Home;


