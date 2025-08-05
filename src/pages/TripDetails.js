import React from "react";
import "../assets/css/TripDetail.css";
import Navbar0 from "../components/Navbar0";

function TripDetails() {
  return (
    <div>
      <Navbar0 />
      <div className="container mx-auto p-4 max-w-4xl">
        {/* Header Section */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Bhaktapur Durbar Square
          </h1>
          <p className="text-lg text-gray-600">
            A Historic Gem in the Kathmandu Valley, Nepal
          </p>
        </header>

        {/* Image Section */}
        <section className="mb-8">
          <img
            src="https://www.holidaynepal.com/nepal/images/bhaktapur.jpg"
            alt="Bhaktapur Durbar Square"
            className="w-full h-96 object-cover rounded-lg shadow-lg"
          />
        </section>

        {/* About Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            About Bhaktapur Durbar Square
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Bhaktapur Durbar Square, located in the ancient city of Bhaktapur,
            Nepal, is a UNESCO World Heritage Site renowned for its rich
            cultural heritage and stunning Newari architecture. This historic
            square is home to intricately carved temples, palaces, and
            courtyards, including the 55-Window Palace, Nyatapola Temple, and
            the iconic Golden Gate. A hub of traditional craftsmanship,
            Bhaktapur offers visitors a vibrant experience with its pottery,
            woodwork, and lively festivals.
          </p>
        </section>

        {/* Details Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Trip Details
          </h2>
          <ul className="text-gray-600 space-y-2">
            <li>
              <strong>Location:</strong> Bhaktapur, Kathmandu Valley, Nepal
            </li>
            <li>
              <strong>Duration:</strong> 1 Day
            </li>
            <li>
              <strong>Difficulty:</strong> Easy
            </li>
            <li>
              <strong>Best Time to Visit:</strong> October to March (Pleasant
              Weather)
            </li>
            <li>
              <strong>Inclusions:</strong> Guided tour, entrance fees, local
              lunch
            </li>
            <li>
              <strong>What to Bring:</strong> Comfortable shoes, camera, water
              bottle
            </li>
          </ul>
        </section>

        {/* Price Section */}
        <section className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Pricing</h2>
          <p className="text-3xl font-bold text-green-600 mb-2">
            $45 per person
          </p>
          <p className="text-gray-600">
            Includes guided tour, entrance fees to Bhaktapur Durbar Square, and
            a traditional Nepali lunch. Excludes transportation to Bhaktapur and
            personal expenses.
          </p>
          <a
            href="booking-form.html"
            className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </section>

        {/* Contact Section */}
        <section className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Need More Information?
          </h2>
          <p className="text-gray-600 mb-4">
            Contact our travel experts for personalized assistance.
          </p>
          <a
            href="mailto:info@travelagency.com"
            className="text-blue-600 hover:underline"
          >
            info@travelagency.com
          </a>
        </section>
      </div>
    </div>
  );
}

export default TripDetails;
