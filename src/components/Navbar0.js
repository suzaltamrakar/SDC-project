import React from "react";
import "./Navbar0.css";
import travelLogo from "../assets/img/Travel Diaries-03.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Left Section - Logo */}
        <div className="logo-section">
          <div className="logo-box">
            <img
              src={travelLogo}
              alt="Travel Diaries Logo"
              className="logo-image"
            />
          </div>
        </div>

        {/* Center Section - Navigation Links */}
        <div className="nav-links">
          <a href="/" className="nav-link connect">
            Home
          </a>
          <a style={{textDecoration: "none", color: "black"}} href="/destination" className="nav-link connect">
            Destination
          </a>
          <a href="/blogs" className="nav-link connect">
            Blogs
          </a>
          <a href="/maps" className="nav-link connect">
            Maps
          </a>
          <a href="/reviews" className="nav-link connect">
            Review
          </a>
        </div>

        {/* Right Section - User Profile */}
        <div className="user-profile">
          <div className="user-info">
            <div className="user-name">Nischal Tamang</div>
            <div className="user-position">Intermediate reviewer</div>
          </div>
          <div className="user-avatar">
            <i className="fas fa-user"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
