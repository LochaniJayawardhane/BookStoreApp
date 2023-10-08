import React, { useEffect, useState } from 'react';
import './Book.css';
import axios from 'axios';
import Book from './Book';

const URL = 'http://localhost:5000/books';

const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Books = () => {
  const [books, setBooks] = useState([]); // Initialize books as an empty array
  const [isLoading, setIsLoading] = useState(true); // Add a loading state

  useEffect(() => {
    fetchHandler()
      .then((data) => {
        setBooks(data); // Data directly from the API response
        setIsLoading(false); // Set loading state to false after data is fetched
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setIsLoading(false); // Handle errors by setting loading state to false
      });
  }, []);
  return (
    <div className="homescreen">
      <h1 className="homescreen__title">List of Books</h1>
      <div className="homescreen__products">
        {isLoading ? (
          <p>Loading...</p> // Show loading indicator
        ) : (
          <ul className="card-container">
            {' '}
            {/* Wrap the list in a container with the card-container class */}
            {books.map((book, i) => (
              <li key={i}>
                <Book book={book} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Books;
