import React from "react";
import "./Navbar0.css";
import travelLogo from "../assets/img/Travel Diaries-03.png";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  // Check if we're on the landing page
  const isLandingPage = location.pathname === "/";

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
          {isAuthenticated && !isLandingPage ? (
            <>
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
            </>
          ) : (
            <>
              <a href="/" className="nav-link connect">
                Home
              </a>
              <a href="/#features" className="nav-link connect">
                Features
              </a>
              <a href="/#pricing" className="nav-link connect">
                Pricing
              </a>
              <a href="/#community" className="nav-link connect">
                Community
              </a>
            </>
          )}
        </div>

        {/* Right Section - Login/User Profile */}
        <div className="user-profile">
          {isAuthenticated && !isLandingPage ? (
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
            <div className="auth-buttons">
              <button
                className="login-btn"
                onClick={() => navigate("/login")}
                style={{
                  background: "#ff632c",
                  color: "white",
                  border: "none",
                  padding: "10px 20px",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "14px",
                  transition: "all 0.3s ease",
                }}
              >
                <i
                  className="fas fa-sign-in-alt"
                  style={{ marginRight: "8px" }}
                ></i>
                Login
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
