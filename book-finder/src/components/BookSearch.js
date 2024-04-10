import React, { useState } from 'react';

const BookSearch = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    setQuery(''); // Clear the search query after submitting
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search Books..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default BookSearch;

