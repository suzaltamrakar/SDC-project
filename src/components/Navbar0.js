import React from "react";
import "./Navbar0.css";
import travelLogo from "../assets/img/Travel Diaries-03.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
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
          <a href="/dashboard" className="nav-link connect">
            Home
          </a>
          <a
            style={{ textDecoration: "none", color: "black" }}
            href="/destination"
            className="nav-link connect"
          >
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
          {isAuthenticated ? (
            <div
              className="user-profile-button"
              onClick={() => navigate("/profile")}
              style={{ cursor: "pointer" }}
              title="Go to Profile"
            >
              <div className="user-info">
                <div className="user-name">{user?.name || "User"}</div>
                <div className="user-position">Traveler</div>
              </div>
              <div className="user-avatar">
                {user?.avatar ? (
                  <img 
                    src={user.avatar} 
                    alt={user?.name || "User"} 
                    className="user-avatar-image"
                  />
                ) : (
                  <i className="fas fa-user"></i>
                )}
              </div>
            </div>
          ) : (
            <>
              <div className="user-info">
                <div className="user-name">Welcome</div>
                <div className="user-position">Join our community</div>
              </div>
              <button className="login-btn" onClick={() => navigate("/login")}>
                <i className="fas fa-sign-in-alt"></i>
                Login
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
