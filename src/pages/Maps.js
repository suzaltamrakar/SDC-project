import React, { useState, useEffect } from "react";
import "../assets/css/Maps.css";
import Navbar0 from "../components/Navbar0";

const Maps = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [mapType, setMapType] = useState("satellite");
  const [zoomLevel, setZoomLevel] = useState(10);
  const [favorites, setFavorites] = useState([]);

  // Sample destinations data
  const destinations = [
    {
      id: 1,
      name: "Paris, France",
      coordinates: { lat: 48.8566, lng: 2.3522 },
      description: "The City of Light",
      image:
        "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=400",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Tokyo, Japan",
      coordinates: { lat: 35.6762, lng: 139.6503 },
      description: "Modern metropolis with ancient traditions",
      image:
        "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400",
      rating: 4.9,
    },
    {
      id: 3,
      name: "New York, USA",
      coordinates: { lat: 40.7128, lng: -74.006 },
      description: "The Big Apple",
      image:
        "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=400",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Sydney, Australia",
      coordinates: { lat: -33.8688, lng: 151.2093 },
      description: "Harbor city with iconic Opera House",
      image:
        "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=400",
      rating: 4.6,
    },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    const destination = destinations.find((dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    if (destination) {
      setSelectedLocation(destination);
    }
  };

  const toggleFavorite = (destination) => {
    if (favorites.find((fav) => fav.id === destination.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== destination.id));
    } else {
      setFavorites([...favorites, destination]);
    }
  };

  const isFavorite = (destination) => {
    return favorites.find((fav) => fav.id === destination.id);
  };

  return (
    <div className="maps-page">
      <Navbar0 />
      <div className="maps-container">
        <div className="maps-header">
          <h1>Explore Destinations</h1>
          <p>Discover amazing places around the world</p>
        </div>

        <div className="maps-content">
          <div className="maps-sidebar">
            <div className="search-section">
              <form onSubmit={handleSearch} className="search-form">
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                <button type="submit" className="search-button">
                  <i className="fa-solid fa-search"></i>
                </button>
              </form>
            </div>

            <div className="map-controls">
              <div className="control-group">
                <label>Map Type:</label>
                <select
                  value={mapType}
                  onChange={(e) => setMapType(e.target.value)}
                  className="map-select"
                >
                  <option value="satellite">Satellite</option>
                  <option value="terrain">Terrain</option>
                  <option value="roadmap">Roadmap</option>
                </select>
              </div>

              <div className="control-group">
                <label>Zoom Level: {zoomLevel}</label>
                <input
                  type="range"
                  min="1"
                  max="20"
                  value={zoomLevel}
                  onChange={(e) => setZoomLevel(e.target.value)}
                  className="zoom-slider"
                />
              </div>
            </div>

            <div className="destinations-list">
              <h3>Popular Destinations</h3>
              {destinations.map((destination) => (
                <div
                  key={destination.id}
                  className={`destination-card ${
                    selectedLocation?.id === destination.id ? "selected" : ""
                  }`}
                  onClick={() => setSelectedLocation(destination)}
                >
                  <div className="destination-image">
                    <img src={destination.image} alt={destination.name} />
                    <button
                      className={`favorite-btn ${
                        isFavorite(destination) ? "favorited" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(destination);
                      }}
                    >
                      <i
                        className={`fa-solid fa-heart ${
                          isFavorite(destination) ? "filled" : ""
                        }`}
                      ></i>
                    </button>
                  </div>
                  <div className="destination-info">
                    <h4>{destination.name}</h4>
                    <p>{destination.description}</p>
                    <div className="destination-rating">
                      <span className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-solid fa-star ${
                              i < Math.floor(destination.rating) ? "filled" : ""
                            }`}
                          ></i>
                        ))}
                      </span>
                      <span className="rating-text">{destination.rating}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {favorites.length > 0 && (
              <div className="favorites-section">
                <h3>Favorites</h3>
                {favorites.map((destination) => (
                  <div key={destination.id} className="favorite-item">
                    <img src={destination.image} alt={destination.name} />
                    <span>{destination.name}</span>
                    <button
                      onClick={() => toggleFavorite(destination)}
                      className="remove-favorite"
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="maps-main">
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <i className="fa-solid fa-map-location-dot"></i>
                  <h3>Interactive Map</h3>
                  <p>Map integration would go here</p>
                  {selectedLocation && (
                    <div className="selected-location-info">
                      <h4>{selectedLocation.name}</h4>
                      <p>
                        Coordinates: {selectedLocation.coordinates.lat},{" "}
                        {selectedLocation.coordinates.lng}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {selectedLocation && (
              <div className="location-details">
                <div className="detail-header">
                  <img
                    src={selectedLocation.image}
                    alt={selectedLocation.name}
                  />
                  <div className="detail-info">
                    <h2>{selectedLocation.name}</h2>
                    <p>{selectedLocation.description}</p>
                    <div className="detail-rating">
                      <span className="stars">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fa-solid fa-star ${
                              i < Math.floor(selectedLocation.rating)
                                ? "filled"
                                : ""
                            }`}
                          ></i>
                        ))}
                      </span>
                      <span className="rating-text">
                        {selectedLocation.rating}/5
                      </span>
                    </div>
                  </div>
                  <button
                    className={`detail-favorite-btn ${
                      isFavorite(selectedLocation) ? "favorited" : ""
                    }`}
                    onClick={() => toggleFavorite(selectedLocation)}
                  >
                    <i
                      className={`fa-solid fa-heart ${
                        isFavorite(selectedLocation) ? "filled" : ""
                      }`}
                    ></i>
                  </button>
                </div>

                <div className="detail-actions">
                  <button className="action-btn primary">
                    <i className="fa-solid fa-plane"></i>
                    Plan Trip
                  </button>
                  <button className="action-btn secondary">
                    <i className="fa-solid fa-share"></i>
                    Share
                  </button>
                  <button className="action-btn secondary">
                    <i className="fa-solid fa-bookmark"></i>
                    Save
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maps;
