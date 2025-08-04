import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Navbar from './components/Navbar';
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Destination from "./pages/Destination";
import TripDetails from "./pages/TripDetails";
import Booking from "./pages/Booking";
import EditProfile from "./pages/EditProfile";
import Login from "./authentication/Login";
import SignUp from "./authentication/SignUp";
import BlogPage from "./pages/BlogPage";
import Blogs from "./pages/Blogs";
import Register from "./authentication/Register";
import AddDestination from "./pages/AddDestination";
import Maps from "./pages/Maps";
import ReviewPage from "./pages/ReviewPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/add-destination" element={<AddDestination />} />
        <Route path="/tripdetails" element={<TripDetails />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
