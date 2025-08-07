import React, { useState } from "react";
import "../assets/css/LandingPage.css";
import Navbar from "../components/Navbar";

const LandingPage = () => {
  const [selectedPlan, setSelectedPlan] = useState("monthly"); // Default to monthly

  const handlePlanToggle = (plan) => {
    setSelectedPlan(plan);
  };

  const handleSelectPlan = (planName, planType) => {
    console.log(`Selected ${planName} plan with ${planType} billing`);
    // Here you can add logic to handle the plan selection
    // For example, redirect to payment page, show modal, etc.
    alert(`You selected the ${planName} plan with ${planType} billing!`);
  };

  return (
    <div className="landing-page">
      {/* Navigation Bar */}
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          background: `url(${require("../assets/img/background.png")}) no-repeat center center`,
          backgroundSize: "cover",
          margin: "100px 20px",
          boxShadow: "0 0 0 0 rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="hero-container">
          <div className="hero-content" style={{ right: "100vh" }}>
            <h1 className="hero-title">
              Let your eyes
              <br /> be the judge,
              <br /> not their words.
            </h1>
            <div className="hero-divider"></div>
            <p className="hero-description">
              Your ultimate travel companion. Carries all the information you
              need while travelling
            </p>
            <button className="btn-primary">Get Started</button>
          </div>
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              {/* <img
                src={require("../assets/img/mobile landing page.png")}
                alt="Mobile landing page"
                className="hero-background-image"
              /> */}
              <div className="hero-phone-overlay">
                <img
                  src={require("../assets/img/mobile landing page.png")}
                  alt="Mobile landing page"
                  className="hero-phone-image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="features-container">
          <div className="features-image-container">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60"
              alt="Traveler with backpack"
              className="features-image"
            />
            <div className="features-testimonial">
              <p className="features-testimonial-text">
                "I love how this app keeps all my travel memories in one place
                from photos to journal entries, it's like reliving every
                adventure!"
              </p>
              <p className="features-testimonial-author">- Smith James</p>
            </div>
          </div>

          <div className="features-content">
            <p className="features-subtitle">GET CONNECTED</p>
            <h2 className="features-title">
              Share Your memories with your travel buddies
            </h2>

            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">person_add</span>
                </div>
                <div className="feature-content">
                  <h3>Signup</h3>
                  <p>
                    Make an account and login to keep yourself updated into
                    travellers platform
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">event</span>
                </div>
                <div className="feature-content">
                  <h3>Create Events</h3>
                  <p>
                    Create an event to gather your fellow travellers and get to
                    know them.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">
                  <span className="material-symbols-outlined">
                    photo_library
                  </span>
                </div>
                <div className="feature-content">
                  <h3>Share Memories</h3>
                  <p>
                    Upload and share stories with your fellow travellers anytime
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Travelers Section */}
      <section className="popular-travelers-section">
        <div className="popular-travelers-bg">Travel Diary</div>
        <div className="popular-travelers-container">
          <div className="popular-travelers-content">
            <div className="popular-travelers-text">
              <div className="popular-travelers-divider"></div>
              <p className="popular-travelers-subtitle">Popular Travellers</p>
              <h2 className="popular-travelers-title">
                Know the people you're going to meet
              </h2>
              <p className="popular-travelers-description">
                Have a quick conversation anytime you need with your fellow
                travellers you're going to travel with.
              </p>

              <div className="traveler-avatars">
                <div className="traveler-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/21.jpg"
                    alt="Traveler"
                  />
                </div>
                <div className="traveler-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/women/22.jpg"
                    alt="Traveler"
                  />
                </div>
                <div className="traveler-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/men/23.jpg"
                    alt="Traveler"
                  />
                </div>
                <div className="traveler-avatar">
                  <img
                    src="https://randomuser.me/api/portraits/women/24.jpg"
                    alt="Traveler"
                  />
                </div>
                <div className="traveler-avatar-add">
                  <span className="material-symbols-outlined">add</span>
                </div>
              </div>

              <p className="popular-travelers-cta">
                With one simple click you can know who can be your travel buddy.
              </p>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="community-section">
        <div className="community-header">
          <h2 className="community-subtitle">BUILD UP A COMMUNITY</h2>
          <h3 className="community-title">
            Join the biggest community of Travelers
          </h3>
        </div>

        <div className="community-map">
          <div className="community-map-bg">
            <img
              src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff"
              alt="World map with travel destinations"
              className="community-map-image"
            />
            <div className="community-map-pins">
              <div
                className="community-map-pin"
                style={{ top: "10%", left: "15%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "20%", left: "70%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "35%", left: "30%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "40%", left: "55%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "65%", left: "20%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "60%", left: "75%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div
                className="community-map-pin"
                style={{ top: "80%", left: "60%" }}
              >
                <span className="material-symbols-outlined">location_on</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="pricing-header">
          <p className="pricing-subtitle">PRICING TABLE</p>
          <h2 className="pricing-title">
            Choose the plan that's right for you
          </h2>
          <div className="pricing-divider"></div>
          <p className="pricing-description">
            Empower Writers and Explore Every Blog <br /> Without Limits
          </p>
        </div>

        <div className="pricing-toggle">
          <div className="pricing-toggle-container">
            <div
              className={`pricing-toggle-monthly ${
                selectedPlan === "monthly" ? "active" : ""
              }`}
              onClick={() => handlePlanToggle("monthly")}
              style={{ cursor: "pointer" }}
            >
              <p className="pricing-toggle-text">Pay monthly</p>
              <p className="pricing-toggle-savings">Save up to Rs:999</p>
            </div>
            <div
              className={`pricing-toggle-annually ${
                selectedPlan === "annually" ? "active" : ""
              }`}
              onClick={() => handlePlanToggle("annually")}
              style={{ cursor: "pointer" }}
            >
              <p className="pricing-toggle-text">Pay annually</p>
              <p className="pricing-toggle-savings">Save up to Rs:1999</p>
            </div>
          </div>
        </div>

        <div className="pricing-cards">
          {/* Member Plan */}
          <div className="pricing-card">
            <div className="pricing-card-header">
              <div className="pricing-card-avatar"></div>
              <h3 className="pricing-card-title">Member</h3>
              <p className="pricing-card-price">
                {selectedPlan === "monthly" ? "$5 USD /month" : "$50 USD /year"}
              </p>
            </div>
            <p className="pricing-card-description">
              Access exclusive content and <br /> support your favorite writers.
            </p>
            <button
              className="pricing-card-button"
              onClick={() => handleSelectPlan("Member", selectedPlan)}
            >
              Select
            </button>
            <div className="pricing-card-benefits">
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Unlock members-only blog posts</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Support your most-read bloggers</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Monetize your writing</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Audio versions of blog posts</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Offline reading in the mobile app</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Connect a custom blog domain</span>
              </div>
              <div className="pricing-card-benefit">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 8.75L6.25 11.25L12.25 5.25"
                    stroke="#14ae5c"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>Create and manage your own blog collections</span>
              </div>
            </div>
          </div>

          {/* Friend Plan (x2) */}
          {[...Array(2)].map((_, i) => (
            <div key={i} className="pricing-card">
              <div className="pricing-card-header">
                <div className="pricing-card-avatar"></div>
                <h3 className="pricing-card-title">Friend</h3>
                <p className="pricing-card-price">
                  {selectedPlan === "monthly"
                    ? "$5 USD /month"
                    : "$50 USD /year"}
                </p>
              </div>
              <p className="pricing-card-description">
                Access exclusive content and <br /> support your favorite
                writers.
              </p>
              <button
                className="pricing-card-button"
                onClick={() => handleSelectPlan("Friend", selectedPlan)}
              >
                Select
              </button>
              <p className="pricing-card-plus">All Medium member benefit</p>
              <p className="pricing-card-plus">PLUS</p>
              <div className="pricing-card-plus-benefits">
                <div className="pricing-card-plus-benefit">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 8.75L6.25 11.25L12.25 5.25"
                      stroke="#14ae5c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Give 4x more to the writers you read</span>
                </div>
                <div className="pricing-card-plus-benefit">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 8.75L6.25 11.25L12.25 5.25"
                      stroke="#14ae5c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Early access to new features</span>
                </div>
                <div className="pricing-card-plus-benefit">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.75 8.75L6.25 11.25L12.25 5.25"
                      stroke="#14ae5c"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>Custom profile badge</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          {/* Company */}
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              {[
                "Careers",
                "About Us",
                "Blog",
                "Press Info",
                "Features",
                "Successes",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Travellers */}
          <div className="footer-column">
            <h3>Travellers</h3>
            <ul>
              {[
                "Why Travellers",
                "Enterprise",
                "Customer Stories",
                "Pricing",
                "Security",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              {[
                "Download",
                "Help center",
                "Guides",
                "Events",
                "Developers",
                "App Directory",
                "Partners",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extras */}
          <div className="footer-column">
            <h3>Extras</h3>
            <ul>
              {[
                "Podcast",
                "Travellers shop",
                "Travellers at Work",
                "Travellers Fund",
                "Integration",
              ].map((item) => (
                <li key={item}>
                  <a href="#">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div className="footer-column">
            <h3>Subscribe</h3>
            <div className="footer-subscribe">
              <input type="email" placeholder="Email address" />
              <button>
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-logo">Travel Diary</div>
          <div className="footer-nav">
            {["Home", "Destination", "Maps", "Review"].map((item) => (
              <a key={item} href="#">
                {item}
              </a>
            ))}
          </div>
          <div className="footer-social">
            {["facebook", "twitter", "instagram"].map((social) => (
              <a key={social} href="#">
                <i className={`fa-brands fa-${social}`}></i>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
