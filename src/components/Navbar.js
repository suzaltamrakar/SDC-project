import React from "react";
import "./Navbar.css";
import travelLogo from "../assets/img/Travel Diaries-03.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-section">
          <div className="logo-container">
            <img
              src={travelLogo}
              alt="Travel Diaries Logo"
              className="logo-image"
            />
          </div>
        </div>
        <div className="nav-links">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="/destination" className="nav-link">
                Destination
              </a>
            </li>
            <li className="nav-item">
              <a href="/blogs" className="nav-link">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a href="/maps" className="nav-link">
                Maps
              </a>
            </li>
          </ul>
        </div>
        <div className="user-container">
          <div className="user-icon">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="user-name">
            <span>John Doe</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
