import React, { useState } from 'react';
import './Login.css';
import travelLogo from '../assets/img/Travel Diaries-03.png';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            try {
                // Simulate API call
                await new Promise(resolve => setTimeout(resolve, 2000));
                console.log('Login form submitted:', formData);
                alert('Login successful! Welcome back to Travel Diary!');
                // Reset form
                setFormData({
                    email: '',
                    password: ''
                });
            } catch (error) {
                alert('Login failed. Please check your credentials and try again.');
            } finally {
                setIsLoading(false);
            }
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="login-container">
            {/* Left Side - Login Form */}
            <div className="login-section">
                <div className="login-card">
                    <div className="login-header">
                        <div className="logo-container">
                            <img src={travelLogo} alt="Travel Diary Logo" className="travel-logo" />
                        </div>
                        <h1>Welcome Back</h1>
                        <p>Sign in to continue your journey</p>
                    </div>

                    <form onSubmit={handleSubmit} className="login-form">
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? 'error' : ''}
                                disabled={isLoading}
                            />
                            {errors.email && <span className="error-message">{errors.email}</span>}
                        </div>

                        <div className="form-group">
                            <div className="password-input-container">
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="Password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className={`password-input ${errors.password ? 'error' : ''}`}
                                    disabled={isLoading}
                                />
                                <button
                                    type="button"
                                    onClick={togglePasswordVisibility}
                                    className="password-toggle-btn"
                                >
                                    {showPassword ? '🙈' : '👁️'}
                                </button>
                            </div>
                            {errors.password && <span className="error-message">{errors.password}</span>}
                        </div>

                        <div className="form-options">
                            <label className="remember-me">
                                <input type="checkbox" />
                                <span>Remember me</span>
                            </label>
                            <a href="/forgot-password" className="forgot-password">Forgot Password?</a>
                        </div>

                        <button 
                            type="submit" 
                            className="login-btn"
                            disabled={isLoading}
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </button>
                    </form>

                    <div className="register-link">
                        Don't have an account? <a href="/register">Sign Up</a>
                    </div>
                </div>
            </div>

            {/* Right Side - Travel Section */}
            <div className="travel-section">
                <div className="travel-content">
                    <img src={travelLogo} alt="Travel Diary Logo" className="travel-logo-large" />
                    <p className="travel-subtitle">
                        Welcome back to your travel community. 
                        Continue sharing your adventures and discovering new destinations.
                    </p>
                    
                    <div className="travel-features">
                        <div className="travel-feature">
                            <div className="travel-icon">✈️</div>
                            <span>Access your travel memories</span>
                        </div>
                        <div className="travel-feature">
                            <div className="travel-icon">📸</div>
                            <span>View your photo collection</span>
                        </div>
                        <div className="travel-feature">
                            <div className="travel-icon">📝</div>
                            <span>Continue your travel stories</span>
                        </div>
                        <div className="travel-feature">
                            <div className="travel-icon">🌍</div>
                            <span>Connect with fellow travelers</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;