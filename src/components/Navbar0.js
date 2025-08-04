import React from 'react';
import './Navbar.css';
import travelLogo from '../assets/img/Travel Diaries-03.png';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Left Section - Logo */}
                <div className="logo-section">
                    <div className="logo-container">
                        <img src={travelLogo} alt="Travel Diaries Logo" className="logo-image" />
                        <div className="logo-text">
                            <span className="logo-main">
                                <span className="logo-t">T</span>
                                <span className="logo-r">R</span>
                                <span className="logo-a">A</span>
                                <span className="logo-v">V</span>
                                <span className="logo-e">E</span>
                                <span className="logo-l">L</span>
                            </span>
                            <span className="logo-sub">DIARY</span>
                        </div>
                    </div>
                </div>

                {/* Right Section - Navigation Links and User Profile */}
                <div className="nav-section">
                    <div className="nav-container">
                        <div className="nav-segment">
                            <a href="/" className="nav-link">Home</a>
                        </div>
                        <div className="nav-segment">
                            <a href="/destination" className="nav-link">Destination</a>
                        </div>
                        <div className="nav-segment">
                            <a href="/blogs" className="nav-link">Blogs</a>
                        </div>
                        <div className="nav-segment">
                            <a href="/maps" className="nav-link">Maps</a>
                        </div>
                        <div className="nav-segment">
                            <a href="/review" className="nav-link">Review</a>
                        </div>
                    </div>
                    
                    {/* User Profile Section */}
                    <div className="user-profile">
                        <div className="user-info">
                            <div className="user-name">Nischal Tamang</div>
                            <div className="user-role">Intermediate reviewer</div>
                        </div>
                        <div className="user-avatar"></div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
