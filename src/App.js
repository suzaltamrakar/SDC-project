import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar0";
import Destination from "./pages/Destination";
import TripDetails from "./pages/TripDetails";
import Booking from "./pages/Booking";
import EditProfile from "./pages/EditProfile";
import Login from "./authentication/Login";
import Register from "./authentication/Register";
import BlogPage from "./pages/BlogPage";
import Blogs from "./pages/Blogs";
import AddDestination from "./pages/AddDestination";
import Maps from "./pages/Maps";
import ReviewPage from "./pages/ReviewPage";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import { FollowingProvider } from "./context/FollowingContext";

function App() {
  return (
    <AuthProvider>
      <FollowingProvider key="following-provider">
        <BrowserRouter>
          <Routes>
            {/* Public Routes - Accessible without authentication */}image.png            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* Protected Routes - Require authentication */}
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <BlogPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blogs"
              element={
                <ProtectedRoute>
                  <Blogs />
                </ProtectedRoute>
              }
            />
            <Route
              path="/reviews"
              element={
                <ProtectedRoute>
                  <ReviewPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/destination"
              element={
                <ProtectedRoute>
                  <Destination />
                </ProtectedRoute>
              }
            />
            <Route
              path="/add-destination"
              element={
                <ProtectedRoute>
                  <AddDestination />
                </ProtectedRoute>
              }
            />
            <Route
              path="/tripdetails"
              element={
                <ProtectedRoute>
                  <TripDetails />
                </ProtectedRoute>
              }
            />
            <Route
              path="/booking"
              element={
                <ProtectedRoute>
                  <Booking />
                </ProtectedRoute>
              }
            />
            <Route
              path="/editprofile"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/maps"
              element={
                <ProtectedRoute>
                  <Maps />
                </ProtectedRoute>
              }
            />
            <Route path="/navbar" element={<Navbar2 />} />
          </Routes>
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            toastStyle={{
              backgroundColor: "#ffffff",
              color: "#333333",
              border: "1px solid #e0e0e0",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
            }}
            progressStyle={{
              background: "#FF632C",
            }}
          />
        </BrowserRouter>
      </FollowingProvider>
    </AuthProvider>
  );
}

export default App;
