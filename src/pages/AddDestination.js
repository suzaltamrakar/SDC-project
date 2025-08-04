import React, { useState } from 'react';
import '../assets/css/AddDestination.css';
import Navbar from '../components/Navbar0';

const AddDestination = () => {
    const [formData, setFormData] = useState({
        destinationName: '',
        imageUrl: '',
        description: '',
        tripDate: '',
        bookingDate: '',
        numberOfPersons: ''
    });

    const [errors, setErrors] = useState({});

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

        if (!formData.destinationName.trim()) {
            newErrors.destinationName = 'Destination name is required';
        }

        if (!formData.imageUrl.trim()) {
            newErrors.imageUrl = 'Image URL is required';
        } else if (!isValidUrl(formData.imageUrl)) {
            newErrors.imageUrl = 'Please enter a valid URL';
        }

        if (!formData.description.trim()) {
            newErrors.description = 'Description is required';
        }

        if (!formData.tripDate) {
            newErrors.tripDate = 'Trip date is required';
        }

        if (!formData.bookingDate) {
            newErrors.bookingDate = 'Booking date is required';
        }

        if (!formData.numberOfPersons) {
            newErrors.numberOfPersons = 'Number of persons is required';
        } else if (parseInt(formData.numberOfPersons) <= 0) {
            newErrors.numberOfPersons = 'Number of persons must be greater than 0';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const isValidUrl = (string) => {
        try {
            new URL(string);
            return true;
        } catch (_) {
            return false;
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Destination form submitted:', formData);
            alert('Destination added successfully!');
            // Reset form
            setFormData({
                destinationName: '',
                imageUrl: '',
                description: '',
                tripDate: '',
                bookingDate: '',
                numberOfPersons: ''
            });
        }
    };

    return (
        <div className="add-destination-container">
            {/* Header/Navigation Bar */}
            <Navbar />

            {/* Main Content */}
            <div className="main-content">
                <div className="content-header">
                    <h1 className="page-title">Destination</h1>
                    <p className="page-subtitle">Plan your next adventure and add it to your journey!</p>
                </div>

                {/* Form Section */}
                <div className="form-container">
                    <form onSubmit={handleSubmit} className="destination-form">
                        <div className="form-columns">
                            {/* Left Column */}
                            <div className="form-column">
                                <div className="form-group">
                                    <label htmlFor="destinationName" className="form-label">Destination Name</label>
                                    <div className="input-container">
                                        <input
                                            type="text"
                                            id="destinationName"
                                            name="destinationName"
                                            value={formData.destinationName}
                                            onChange={handleChange}
                                            placeholder="eg. Pokhara"
                                            className={`form-input ${errors.destinationName ? 'error' : ''}`}
                                        />
                                        <span className="input-icon">✏️</span>
                                    </div>
                                    {errors.destinationName && <span className="error-message">{errors.destinationName}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="imageUrl" className="form-label">Image URL</label>
                                    <input
                                        type="url"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={formData.imageUrl}
                                        onChange={handleChange}
                                        placeholder="eg. https://source..."
                                        className={`form-input ${errors.imageUrl ? 'error' : ''}`}
                                    />
                                    {errors.imageUrl && <span className="error-message">{errors.imageUrl}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <textarea
                                        id="description"
                                        name="description"
                                        value={formData.description}
                                        onChange={handleChange}
                                        placeholder="tell us about blog"
                                        className={`form-input form-textarea ${errors.description ? 'error' : ''}`}
                                        rows="4"
                                    />
                                    {errors.description && <span className="error-message">{errors.description}</span>}
                                </div>
                            </div>

                            {/* Right Column */}
                            <div className="form-column">
                                <div className="form-group">
                                    <label htmlFor="tripDate" className="form-label">Trip date</label>
                                    <div className="input-container">
                                        <input
                                            type="date"
                                            id="tripDate"
                                            name="tripDate"
                                            value={formData.tripDate}
                                            onChange={handleChange}
                                            className={`form-input ${errors.tripDate ? 'error' : ''}`}
                                        />
                                        <span className="input-icon">📅</span>
                                    </div>
                                    {errors.tripDate && <span className="error-message">{errors.tripDate}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="bookingDate" className="form-label">Booking Date</label>
                                    <div className="input-container">
                                        <input
                                            type="date"
                                            id="bookingDate"
                                            name="bookingDate"
                                            value={formData.bookingDate}
                                            onChange={handleChange}
                                            className={`form-input ${errors.bookingDate ? 'error' : ''}`}
                                        />
                                        <span className="input-icon">📅</span>
                                    </div>
                                    {errors.bookingDate && <span className="error-message">{errors.bookingDate}</span>}
                                </div>

                                <div className="form-group">
                                    <label htmlFor="numberOfPersons" className="form-label">No of Person</label>
                                    <input
                                        type="number"
                                        id="numberOfPersons"
                                        name="numberOfPersons"
                                        value={formData.numberOfPersons}
                                        onChange={handleChange}
                                        placeholder="eg. 4"
                                        min="1"
                                        className={`form-input ${errors.numberOfPersons ? 'error' : ''}`}
                                    />
                                    {errors.numberOfPersons && <span className="error-message">{errors.numberOfPersons}</span>}
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="form-actions">
                            <button type="submit" className="submit-btn">
                                Add Destination
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDestination; 