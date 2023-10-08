import React, { useState } from 'react';
import './Book.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Book = (props) => {
  const { _id, title, author, ISBN, imageUrl } = props.book;

  const [books, setBooks] = useState(props.books);

  const deleteHandler = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/books/${ISBN}`
      );
      if (response.status === 200) {
        console.log('Book deleted successfully');
        toast.success('Book deleted successfully');
        const updatedBooks = await fetchUpdatedBooks();
        setBooks(updatedBooks);
      } else {
        console.log('Book deletion failed:', response.status);
      }
    } catch (error) {
      console.error('Error deleting Book:', error);
      throw error;
    }
  };

  const fetchUpdatedBooks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/books');
      return response.data;
    } catch (error) {
      console.error('Error fetching updated Book:', error);
      return books;
    }
  };

  return (
    <div className="card">
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <p>{author}</p>
      <h2>{ISBN}</h2>

      <div className="button-container">
        <button onClick={deleteHandler} className="delete-button">
          Delete
        </button>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
};

export default Book;
