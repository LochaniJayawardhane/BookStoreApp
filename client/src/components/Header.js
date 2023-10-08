//import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'; // Import your custom CSS file

const Header = () => {
  // const [value, setValue] = useState();

  return (
    <div>
      <div className="app-bar">
        <div className="header-content">
          <h6 className="header-title">Book Store</h6>
        </div>
        <nav className="header-tabs">
          <ul>
            <li>
              <NavLink to="/add" className="nav-link" activeClassName="active">
                ADD BOOKS
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/books"
                className="nav-link"
                activeClassName="active"
              >
                BOOKS
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
