import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in on app start
  useEffect(() => {
    const savedToken = localStorage.getItem("travelDiaryToken");
    const savedUser = localStorage.getItem("travelDiaryUser");

    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      // Save to localStorage
      localStorage.setItem("travelDiaryToken", data.token);
      localStorage.setItem("travelDiaryUser", JSON.stringify(data.user));

      // Update state
      setToken(data.token);
      setUser(data.user);

      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const register = async (name, email, password, location) => {
    try {
      const response = await fetch("http://localhost:3001/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password, location }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Registration failed");
      }

      // Save to localStorage
      localStorage.setItem("travelDiaryToken", data.token);
      localStorage.setItem("travelDiaryUser", JSON.stringify(data.user));

      // Update state
      setToken(data.token);
      setUser(data.user);

      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    // Remove from localStorage
    localStorage.removeItem("travelDiaryToken");
    localStorage.removeItem("travelDiaryUser");

    // Don't clear following data - let it persist across sessions
    // localStorage.removeItem("followingList");
    // localStorage.removeItem("followingCount");

    // Update state
    setToken(null);
    setUser(null);
  };

  const getAuthHeaders = () => {
    return {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
  };

  const getAuthHeadersForFormData = () => {
    return {
      Authorization: `Bearer ${token}`,
      // Don't set Content-Type for FormData, let browser set it
    };
  };

  const updateProfile = async (profileData) => {
    try {
      const formData = new FormData();

      // Add profile data
      Object.keys(profileData).forEach((key) => {
        if (key === "avatar" && profileData[key] instanceof File) {
          // Add file
          formData.append("avatar", profileData[key]);
        } else if (
          key !== "avatar" &&
          profileData[key] !== undefined &&
          profileData[key] !== null
        ) {
          // Add other data
          formData.append(key, profileData[key]);
        }
      });

      const response = await fetch(
        `http://localhost:3001/api/profile/${user.id}`,
        {
          method: "PUT",
          headers: getAuthHeadersForFormData(),
          body: formData,
        }
      );

      const data = await response.json();

      if (response.ok) {
        // Update user in context and localStorage
        setUser(data.user);
        localStorage.setItem("travelDiaryUser", JSON.stringify(data.user));
        return { success: true, user: data.user };
      } else {
        return { success: false, error: data.error };
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    token,
    loading,
    login,
    register,
    logout,
    updateProfile,
    getAuthHeaders,
    getAuthHeadersForFormData,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
