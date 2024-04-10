import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PopoverMenu from "./components/PopoverMenu";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
import HelpSupport from "./pages/HelpSupport";
import Logout from "./pages/Logout";
import BookSearch from "./components/BookSearch";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setBooks([]); // Clear books if error occurs
    }
  };

  return (
    <Router>
      <div className="App">
        <PopoverMenu />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/help-support" element={<HelpSupport />} />
          <Route path="/logout" element={<Logout />} />
          {/* Add more routes as needed */}
          <Route
            path="/"
            element={<Home handleSearch={handleSearch} books={books} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

function Home(props) {
  return (
    <>
      <h1>Book Finder</h1>
      <BookSearch onSearch={props.handleSearch} />
      <BookList books={props.books} />
    </>
  );
}

export default App;




