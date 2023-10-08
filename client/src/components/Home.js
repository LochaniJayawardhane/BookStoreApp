import React from 'react';

const Home = () => {
  const containerStyle = {
    backgroundImage: `url(${require('../images/book.jpg')})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px', // Add padding for better spacing
  };

  const headingStyle = {
    fontSize: '70px',
    marginTop: '0px',
    marginBottom: '90px',
    textAlign: 'center',
    fontStyle: 'italic',
    color: '#1F2937',
  };

  const buttonStyle = {
    background: '#1F2937',
    color: 'white',
    fontSize: '24px',
    padding: '10px 20px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    textAlign: 'center',
    width: '200px',
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>Welcome to Book Management System</h1>
      <a href="/books" style={buttonStyle}>
        View All Books
      </a>
    </div>
  );
};

export default Home;
