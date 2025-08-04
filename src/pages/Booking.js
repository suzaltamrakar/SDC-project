import React from 'react';
import '../assets/css/Booking.css';

const App = () => {
  // Photo URL (placeholder Nepal temple/cultural site)
  const photoUrl =
    'https://images.unsplash.com/photo-1589468277275-1b2eb0c5f0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80';

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
            <h1 className="text-2xl font-serif font-bold">My Nepal Cultural Diary</h1>
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
            <h2 className="text-5xl font-serif font-bold mb-6 animate-fade-in">Sacred Nepal</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Experience the spiritual beauty of Nepal’s temples, like the iconic Boudhanath Stupa, a UNESCO World Heritage site.
            </p>
            <a
              href="#gallery"
              className="bg-gold-600 text-white px-8 py-3 rounded-lg hover:bg-gold-700 transition-colors text-lg"
              onClick={(e) => {
                e.preventDefault();
                handleScroll('#gallery');
              }}
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Gallery Section (Placeholder) */}
      <section id="gallery" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-serif font-bold text-green-900 mb-6">Gallery</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          Dive into a collection of photos showcasing Nepal’s cultural landmarks and serene moments.
        </p>
        {/* Add more gallery items as needed */}
      </section>

      {/* About Section (Placeholder) */}
      <section id="about" className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-4xl font-serif font-bold text-green-900 mb-6">About</h3>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
          My Nepal Cultural Diary celebrates the spiritual and historical essence of Nepal through captivating imagery and narratives.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-green-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="text-2xl font-serif font-bold mb-4">Join My Journey</h4>
          <p className="mb-4">Subscribe for updates on Nepal’s cultural treasures!</p>
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
          <p>© {new Date().getFullYear()} My Nepal Cultural Diary. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;