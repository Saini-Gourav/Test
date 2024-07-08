import React from 'react';

const Dropdown = () => (
  <div className="dropdown-content">
    <a href="#">Genre 1</a>
    <a href="#">Genre 2</a>
    <a href="#">Genre 3</a>
  </div>
);

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">
      <img src="your-logo-url.png" alt="Logo" />
      <span>BrainyLingo</span>
    </div>
    <ul className="nav-links">
      <li><a href="#">Home</a></li>
      <li><a href="#">Leaderboard</a></li>
      <li><a href="#">Daily Quiz</a></li>
      <li className="dropdown">
        <a href="#" className="dropbtn">Genre</a>
        <Dropdown />
      </li>
    </ul>
    <button className="sign-out">Sign Out</button>
  </nav>
);

export default Navbar;
