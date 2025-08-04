import { Search, MapPin } from "lucide-react"
import "../assets/css/Destination.css"
import Navbar from "../components/Navbar0"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="hero">
        <img
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="Nepal mountains with flowers"
          className="hero-image"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Experience the Beauty of Nepal</h1>
            <p className="hero-subtitle">Discover the beauty of Nepal, one place at a time</p>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="search-section">
        <div className="search-container">
          <div className="search-form">
            <div className="search-input-container">
              <Search className="search-icon" />
              <input type="text" placeholder="Search Destination" className="search-input" />
            </div>
            <button className="add-destination-btn">
              <MapPin className="icon" />
              Add Destination
            </button>
          </div>
        </div>
      </section>

      {/* Ongoing Destination Section */}
      <section className="section">
        <h2 className="section-title">Ongoing Destination</h2>
        <div className="cards-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card">
              <div className="card-image-container">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Bhaktapur Durbar Square"
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Bhaktapur Durbar Square</h3>
                <p className="card-description">A former royal palace complex located in Bhaktapur, Nepal</p>
                <button className="card-button">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Upcoming Destinations Section */}
      <section className="section upcoming-section">
        <h2 className="section-title">Upcoming Destinations</h2>
        <div className="cards-grid">
          {[1, 2, 3].map((item) => (
            <div key={item} className="card">
              <div className="card-image-container">
                <div className="card-badge">
                  <span className="coming-soon-badge">Coming Soon</span>
                </div>
                <img
                  src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80"
                  alt="Boudhanath Stupa"
                  className="card-image"
                />
              </div>
              <div className="card-content">
                <h3 className="card-title">Boudhanath Stupa</h3>
                <p className="card-description">One of the most sacred landmarks</p>
                <button className="card-button">View More</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-content">
            <div className="footer-logo">
              <span className="footer-title">Travel Diary</span>
            </div>
            <nav className="footer-nav">
              <a href="#" className="footer-link">
                Home
              </a>
              <a href="#" className="footer-link">
                Destination
              </a>
              <a href="#" className="footer-link">
                About
              </a>
              <a href="#" className="footer-link">
                Review
              </a>
            </nav>
            <div className="footer-dots">
              <div className="dot dot-inactive"></div>
              <div className="dot dot-inactive"></div>
              <div className="dot dot-active"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default HomePage
