import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './AddBook.css';

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    title: '',
    author: '',
    ISBN: '',
    imageUrl: '',
  });

  const [checked, setChecked] = useState(false);
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post('http://localhost:5000/books', {
        title: String(inputs.title),
        author: String(inputs.author),
        ISBN: String(inputs.ISBN),
        imageUrl: String(inputs.imageUrl),
      })
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history('/books'));
  };

  return (
    <div className="container">
      <h1 className="heading">Add New Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <label className="form-label">TITLE</label>
          <input
            value={inputs.title}
            onChange={handleChange}
            className="form-input"
            type="text"
            name="title"
          />
          <label className="form-label">AUTHOR</label>
          <input
            value={inputs.author}
            onChange={handleChange}
            className="form-input"
            type="text"
            name="author"
          />
          <label className="form-label">ISBN</label>
          <input
            value={inputs.ISBN}
            onChange={handleChange}
            className="form-input"
            type="text"
            name="ISBN"
          />
          <label className="form-label">IMAGE</label>
          <input
            value={inputs.imageUrl}
            onChange={handleChange}
            className="form-input"
            type="text"
            name="imageUrl"
          />
          <button className="submit-button" type="submit">
            Add Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
