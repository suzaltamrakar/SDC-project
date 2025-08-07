import React, { useState, useEffect } from "react";
import "../assets/css/EditProfile.css";
import Navbar0 from "../components/Navbar0";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
  console.log("EditProfile component loaded");
  const { user, updateProfile, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [profileData, setProfileData] = useState({
    name: "",
    email: "",
    bio: "",
    location: "",
    website: "",
    phone: "",
    dateOfBirth: "",
    avatar: "",
    city: "",
    state: "",
    country: "United States of America",
    languages: "English, Spanish",
    interests: "Teaching English, Citizenship",
  });

  const [profilePicture, setProfilePicture] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // Load user data on component mount
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    if (user) {
      setProfileData({
        name: user.name || "",
        email: user.email || "",
        bio: user.bio || "",
        location: user.location || "",
        website: user.website || "",
        phone: user.phone || "",
        dateOfBirth: user.dateOfBirth || "",
        avatar: user.avatar || "",
        city: user.city || "",
        state: user.state || "",
        country: user.country || "United States of America",
        languages: user.languages || "English, Spanish",
        interests: user.interests || "Teaching English, Citizenship",
      });
      setPreviewUrl(user.avatar || "");
    }
  }, [user, isAuthenticated, navigate]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleProfilePictureChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        setErrors((prev) => ({
          ...prev,
          avatar: "Please select a valid image file",
        }));
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          avatar: "File size must be less than 5MB",
        }));
        return;
      }

      setProfilePicture(file);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);

      // Clear avatar error
      if (errors.avatar) {
        setErrors((prev) => ({
          ...prev,
          avatar: "",
        }));
      }
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    setPreviewUrl("");
    // Reset file input
    const fileInput = document.getElementById("profile-picture-input");
    if (fileInput) {
      fileInput.value = "";
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!profileData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!profileData.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (profileData.website && !isValidUrl(profileData.website)) {
      newErrors.website = "Please enter a valid URL";
    }

    if (profileData.phone && !isValidPhone(profileData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isValidPhone = (phone) => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Prepare profile data
      const dataToUpdate = { ...profileData };

      // Add profile picture if selected
      if (profilePicture) {
        dataToUpdate.avatar = profilePicture;
      }

      const result = await updateProfile(dataToUpdate);

      if (result.success) {
        alert("Profile updated successfully!");
        navigate("/profile");
      } else {
        alert(result.error || "Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      className="edit-profile-container"
      style={{ minHeight: "100vh", background: "#f8f9fa"}}
    >
      <Navbar0 />
      <div
        className="edit-profile-content"
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "20px",
          background: "white",
          borderRadius: "12px",
          boxShadow: "0 2px 12px rgba(0, 0, 0, 0.1)",
          marginTop: "20px",
          marginBottom: "40px",
        }}
      >
        <div
          className="edit-profile-header"
          style={{
            textAlign: "center",
            marginBottom: "40px",
            paddingBottom: "20px",
            borderBottom: "2px solid #f0f0f0",
          }}
        >
          <h1
            style={{
              fontSize: "32px",
              fontWeight: "700",
              color: "#333",
              marginBottom: "8px",
            }}
          >
            Edit Profile
          </h1>
          <p style={{ fontSize: "16px", color: "#666", margin: "0" }}>
            Update your personal information and profile picture
          </p>
        </div>

        <form onSubmit={handleSubmit} className="edit-profile-form">
          {/* Profile Picture Section */}
          <div className="profile-section" style={{ marginBottom: "40px" }}>
            <div
              className="profile-picture-container"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "20px",
                padding: "20px 0",
                borderBottom: "1px solid #e0e0e0",
                marginBottom: "30px",
              }}
            >
              <div
                className="profile-picture-preview"
                style={{
                  marginLeft: "0px",
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "3px solid #ddd",
                  background: "#f0f0f0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                {previewUrl ? (
                  <img
                    src={previewUrl}
                    alt="Profile Preview"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div style={{ fontSize: "40px", color: "#ccc" }}>
                    <i className="fa-solid fa-user"></i>
                  </div>
                )}
              </div>
              <div className="profile-picture-actions">
                <label
                  htmlFor="profile-picture-input"
                  style={{
                    display: "inline-block",
                    padding: "8px 16px",
                    background: "#333",
                    color: "white",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                    marginRight: "10px",
                  }}
                >
                  Upload your photo
                </label>
                <button
                  type="button"
                  onClick={removeProfilePicture}
                  style={{
                    padding: "8px 16px",
                    background: "#f5f5f5",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    cursor: "pointer",
                    fontSize: "14px",
                  }}
                >
                  Delete
                </button>
                <input
                  type="file"
                  id="profile-picture-input"
                  accept="image/*"
                  onChange={handleProfilePictureChange}
                  style={{ display: "none" }}
                />
              </div>
              {errors.avatar && (
                <span className="error-message">{errors.avatar}</span>
              )}
            </div>
          </div>

          {/* Personal Information Section */}
          <div className="form-section" style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Personal Information
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div className="form-group">
                <label
                  htmlFor="name"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  First name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={profileData.name.split(" ")[0] || ""}
                  onChange={(e) => {
                    const lastName =
                      profileData.name.split(" ").slice(1).join(" ") || "";
                    handleInputChange({
                      target: {
                        name: "name",
                        value:
                          e.target.value + (lastName ? " " + lastName : ""),
                      },
                    });
                  }}
                  placeholder="John"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                  required
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="lastName"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={profileData.name.split(" ").slice(1).join(" ") || ""}
                  onChange={(e) => {
                    const firstName = profileData.name.split(" ")[0] || "";
                    handleInputChange({
                      target: {
                        name: "name",
                        value:
                          firstName +
                          (e.target.value ? " " + e.target.value : ""),
                      },
                    });
                  }}
                  placeholder="Doe"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div className="form-group" style={{ gridColumn: "1 / -1" }}>
                <label
                  htmlFor="location"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Street address
                  <span
                    style={{
                      background: "#ffebee",
                      color: "#d32f2f",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontSize: "11px",
                      marginLeft: "8px",
                    }}
                  >
                    Private
                  </span>
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={profileData.location}
                  onChange={handleInputChange}
                  placeholder="1234 Unknown Street"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="city"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  City/town
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={profileData.city || ""}
                  onChange={handleInputChange}
                  placeholder="Seattle"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
              </div>

              <div className="form-group">
                <label
                  htmlFor="state"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  State
                </label>
                <select
                  id="state"
                  name="state"
                  value={profileData.state || ""}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    background: "white",
                  }}
                >
                  <option value="">Select State</option>
                  <option value="Washington">Washington</option>
                  <option value="California">California</option>
                  <option value="New York">New York</option>
                  <option value="Texas">Texas</option>
                  <option value="Florida">Florida</option>
                </select>
              </div>

              <div className="form-group">
                <label
                  htmlFor="country"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  value={profileData.country || "United States of America"}
                  onChange={handleInputChange}
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    background: "white",
                  }}
                >
                  <option value="United States of America">
                    United States of America
                  </option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="Nepal">Nepal</option>
                </select>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="form-section" style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Contact Information
            </h3>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "20px",
              }}
            >
              <div className="form-group">
                <label
                  htmlFor="phone"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Phone number
                  <span
                    style={{
                      background: "#ffebee",
                      color: "#d32f2f",
                      padding: "2px 6px",
                      borderRadius: "3px",
                      fontSize: "11px",
                      marginLeft: "8px",
                    }}
                  >
                    Private
                  </span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={profileData.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890"
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                  }}
                />
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
              </div>

              <div className="form-group">
                <label
                  htmlFor="email"
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    fontWeight: "500",
                    color: "#555",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={profileData.email}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "4px",
                    fontSize: "14px",
                    background: "#f9f9f9",
                    color: "#666",
                  }}
                  title="Email cannot be changed"
                />
              </div>
            </div>
          </div>

          {/* Profile Description Section */}
          <div className="form-section" style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#333",
                marginBottom: "20px",
              }}
            >
              Profile Description
            </h3>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="languages"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Language(s) I speak
              </label>
              <select
                id="languages"
                name="languages"
                value={profileData.languages || "English, Spanish"}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  background: "white",
                }}
              >
                <option value="English, Spanish">English, Spanish</option>
                <option value="English">English</option>
                <option value="Spanish">Spanish</option>
                <option value="French">French</option>
                <option value="German">German</option>
                <option value="Nepali, English">Nepali, English</option>
              </select>
            </div>

            <div className="form-group" style={{ marginBottom: "20px" }}>
              <label
                htmlFor="interests"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Volunteer programs I am interested in helping with
              </label>
              <select
                id="interests"
                name="interests"
                value={profileData.interests || "Teaching English, Citizenship"}
                onChange={handleInputChange}
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  background: "white",
                }}
              >
                <option value="Teaching English, Citizenship">
                  Teaching English, Citizenship
                </option>
                <option value="Environmental Conservation">
                  Environmental Conservation
                </option>
                <option value="Community Development">
                  Community Development
                </option>
                <option value="Education">Education</option>
                <option value="Healthcare">Healthcare</option>
              </select>
            </div>

            <div className="form-group">
              <label
                htmlFor="bio"
                style={{
                  display: "block",
                  marginBottom: "8px",
                  fontWeight: "500",
                  color: "#555",
                }}
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                value={profileData.bio}
                onChange={handleInputChange}
                placeholder="My mother immigrated to this country before I was born. I always remember her talking about how hard it was so I wanted to do something to help others who were going through the same thing she..."
                rows="4"
                maxLength="1024"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ddd",
                  borderRadius: "4px",
                  fontSize: "14px",
                  resize: "vertical",
                }}
              />
              <small
                style={{
                  color: "#666",
                  fontSize: "12px",
                  float: "right",
                  marginTop: "4px",
                }}
              >
                {profileData.bio.length}/1024 characters
              </small>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => navigate("/profile")}
            >
              Cancel
            </button>
            <button type="submit" className="save-btn" disabled={isLoading}>
              {isLoading ? (
                <>
                  <i className="fa-solid fa-spinner fa-spin"></i>
                  Saving...
                </>
              ) : (
                <>
                  <i className="fa-solid fa-save"></i>
                  Save Changes
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfile;
