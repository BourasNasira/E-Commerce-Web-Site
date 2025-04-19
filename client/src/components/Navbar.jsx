import React from 'react';
// import './Navbar.css';

const Navbar = () => {
  return (
    <header>
      <div className="top-bar">
        <p>Sign up and get 20% off on your first order. <a href="#">Sign up now</a></p>
      </div>
      <nav className="navbar">
        <h1 className="logo">SHOPIRA</h1>
        <ul className="nav-links">
          <li>Home</li>
          <li>About</li>
          <li>New Arrival</li>
        </ul>
        <div className="icons">🔍 👤 🛒</div>
      </nav>
    </header>
  );
};

export default Navbar;
