import React from 'react';
import '../authentication/SignUp.css';
import airplaneImg from '../assets/img/airplane 1.png';

const SignUp = () => {
    return (
        <div className="signup-container">
            {/* Left Panel - Orange Branding */}
            <div className="branding-panel">
                <div className="branding-content">
                    {/* Top left airplane icon */}
                    <div className="airplane-icon">
                        <img src={airplaneImg} alt="Airplane Icon" style={{width: '40px', height: '40px'}} />
                    </div>
                    
                    {/* Main logo */}
                    <div className="main-logo">
                        <div className="logo-text">
                            <span className="travel-text">TRAVEL</span>
                            <span className="diary-text">DIARY</span>
                        </div>
                    </div>
                    
                    {/* Bottom branding */}
                    <div className="bottom-branding">
                        <div className="location-pin">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="white"/>
                            </svg>
                        </div>
                        <h2 className="brand-title">Travel Diary</h2>
                        <p className="brand-tagline">Document and Share your travels Memories</p>
                    </div>
                </div>
            </div>

            {/* Right Panel - White Form */}
            <div className="form-panel">
                <div className="form-content">
                    {/* Top right airplane icon */}
                    <div className="top-airplane">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M21 16V14L13 9V3.5C13 2.67 12.33 2 11.5 2C10.67 2 10 2.67 10 3.5V9L2 14V16L10 13.5V19L8 20.5V22L11.5 21L15 22V20.5L13 19V13.5L21 16Z" fill="#FF632C"/>
                        </svg>
                    </div>
                    
                    <form className="signup-form">
                        <h1 className="form-title">Sign-Up</h1>
                        
                        <div className="input-group">
                            {/* <label htmlFor="fullname">Full Name</label> */}
                            <input type="text" id="fullname" name="fullname" placeholder='Full Name' required />
                        </div>
                        
                        <div className="input-group">
                            {/* <label htmlFor="email">Email</label> */}
                            <input type="email" id="email" name="email" placeholder='Email' required />
                        </div>
                        
                        <div className="input-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <input type="password" id="password" name="password" placeholder='Password' required />
                        </div>
                        
                        <button type="submit" className="signup-btn">Sign Up</button>
                        
                        <p className="login-link">
                            Already had an account? <a href="/login">Login</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
