import React, { useState, useEffect } from 'react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Photo URL (placeholder Nepal landscape)
  const photoUrl =
    'https://images.unsplash.com/photo-1542228262-3d663b506f93?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

  // Smooth scrolling
  const handleScroll = (id) => {
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream-50 font-sans text-gray-800">
      {/* Navigation */}
      <nav className="bg-green-900 text-white sticky top-0 z-20 shadow-lg">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src="https://via.placeholder.com/40" alt="Logo" className="h-10 mr-3" />
            <h1 className="text-2xl font-serif font-bold">My Nepal Photo Diary</h1>
          </div>
          <ul className="flex space-x-8">
            <li>
              <a href="#" className="hover:text-gold-300 transition-colors" onClick={() => handleScroll('#home')}>
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-300 transition-colors" onClick={() => handleScroll('#gallery')}>
                Gallery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gold-300 transition-colors" onClick={() => handleScroll('#about')}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>

      {/* Hero Section with Photo */}
      <section id="home" className="relative h-screen">
        <div
          className="hero-slide active parallax"
          style={{ backgroundImage: `url(${photoUrl})` }}
        ></div>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl font-serif font-bold mb-6 animate-fade-in">Majestic Nepal</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Capture the beauty of Nepal’s mountains and temples in this stunning landscape from the Annapurna region.
            </p>
            <a
              href="#gallery"
              className="bg-gold-600 text-white px-8 py-3 rounded-lg hover:bg-gold-700 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#gallery');
              }}
            >
              Discover More
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section (Placeholder) */}
      <section id="gallery" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-serif font-bold text-green-900 mb-6">Gallery</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Explore more breathtaking photos of Nepal’s landscapes, cultures, and adventures.
        </p>
        {/* Add more gallery items as needed */}
      </section>

      {/* About Section (Placeholder) */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-serif font-bold text-green-900 mb-6">About</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          My Nepal Photo Diary showcases the beauty of Nepal through stunning imagery and personal stories.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-serif font-bold mb-4">Join My Journey</h4>
          <p className="mb-4">Subscribe for updates on Nepal’s hidden gems!</p>
          <div className="flex justify-center mb-6">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button className="bg-gold-600 text-white px-4 py-2 rounded-r-lg hover:bg-gold-700">Subscribe</button>
          </div>
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="hover:text-gold-300">Twitter</a>
            <a href="#" className="hover:text-gold-300">Instagram</a>
            <a href="#" className="hover:text-gold-300">Facebook</a>
            <a href="#" className="hover:text-gold-300">Pinterest</a>
          </div>
          <p>© {new Date().getFullYear()} My Nepal Photo Diary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;