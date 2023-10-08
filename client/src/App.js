import React from 'react';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import Books from './components/Book/Books';

function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/add" element={<AddBook />} exact />
        <Route path="/books" element={<Books />} exact />
      </Routes>
    </React.Fragment>
  );
}

export default App;
