import React, { useState, useEffect } from "react";
import "../assets/css/Profile.css";
import Navbar0 from "../components/Navbar0";
import { useAuth } from "../context/AuthContext";
import { useFollowing } from "../context/FollowingContext";
import { useNavigate } from "react-router-dom";

function Profile() {
  const { user, logout, isAuthenticated, getAuthHeaders } = useAuth();
  const { followingCount, clearFollowingData, followingList } = useFollowing();
  const navigate = useNavigate();
  const [userPosts, setUserPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Debug log to show current following state
  useEffect(() => {
    console.log("Profile component - Current following state:", {
      followingList,
      followingCount,
      isAuthenticated,
      userId: user?.id,
    });
  }, [followingList, followingCount, isAuthenticated, user?.id]);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login");
      return;
    }

    const fetchUserPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts");
        if (response.ok) {
          const allPosts = await response.json();
          // Filter posts by current user
          const filteredPosts = allPosts.filter(
            (post) => post.userId === user?.id
          );
          setUserPosts(filteredPosts);
        } else {
          console.error("Failed to fetch user posts");
        }
      } catch (error) {
        console.error("Error fetching user posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserPosts();
  }, [isAuthenticated, user, navigate]);

  const handleLogout = () => {
    // Don't clear following data - let it persist across sessions
    // clearFollowingData();
    logout();
    navigate("/");
  };

  if (!isAuthenticated) {
    return null;
  }

  if (loading) {
    return (
      <div className="profile-container">
        <Navbar0 />
        <div className="loading-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <Navbar0 />
      <div className="profile-content">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-cover">
            <img
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=300&fit=crop"
              alt="Cover"
              className="cover-image"
            />
          </div>
          <div className="profile-info">
            <div className="profile-avatar">
              <img
                src={
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0c3770cd4?w=150&h=150&fit=crop&crop=face"
                }
                alt={user?.name}
                className="avatar-image"
              />
            </div>
            <div className="profile-details">
              <h1 className="profile-name">{user?.name || "User"}</h1>
              <p className="profile-email">{user?.email}</p>
              <p className="profile-bio">
                Travel enthusiast sharing amazing experiences around the world!
              </p>
            </div>
            <div className="profile-actions">
              <button
                className="edit-profile-btn"
                onClick={() => navigate("/editprofile")}
              >
                <i className="fas fa-edit"></i>
                Edit Profile
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i>
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Profile Stats */}
        <div className="profile-stats">
          <div className="stat-item">
            <span className="stat-number">{userPosts.length}</span>
            <span className="stat-label">Posts</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">0</span>
            <span className="stat-label">Reviews</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">0</span>
            <span className="stat-label">Followers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">{followingCount}</span>
            <span className="stat-label">Following</span>
          </div>
        </div>

        {/* Debug Section - Temporary */}
        <div
          style={{
            margin: "20px",
            padding: "10px",
            background: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h4>Debug Info:</h4>
          <p>Following Count: {followingCount}</p>
          <p>Following List: {JSON.stringify(followingList)}</p>
          <p>
            localStorage followingList: {localStorage.getItem("followingList")}
          </p>
          <p>
            localStorage followingCount:{" "}
            {localStorage.getItem("followingCount")}
          </p>
          <button
            onClick={() => {
              console.log("Manual localStorage check:", {
                followingList: localStorage.getItem("followingList"),
                followingCount: localStorage.getItem("followingCount"),
              });
            }}
            style={{ padding: "5px 10px", margin: "5px" }}
          >
            Check localStorage
          </button>
        </div>

        {/* User's Posts */}
        <div className="user-posts-section">
          <h2 className="section-title">My Posts</h2>
          {userPosts.length === 0 ? (
            <div className="no-posts">
              <i className="fas fa-camera"></i>
              <p>No posts yet</p>
              <button
                className="create-first-post-btn"
                onClick={() => navigate("/dashboard")}
              >
                Create Your First Post
              </button>
            </div>
          ) : (
            <div className="posts-grid">
              {userPosts.map((post) => (
                <div key={post.id} className="post-card">
                  <div className="post-header">
                    <div className="post-user-info">
                      <img
                        src={post.user?.avatar || user?.avatar}
                        alt={post.user?.name || user?.name}
                        className="user-avatar"
                      />
                      <div className="user-details">
                        <h4 className="user-name">
                          {post.user?.name || user?.name}
                        </h4>
                        <span className="post-timestamp">{post.timestamp}</span>
                      </div>
                    </div>
                  </div>
                  <div className="post-content">
                    <p className="post-text">{post.content}</p>
                    {post.image && (
                      <img src={post.image} alt="Post" className="post-image" />
                    )}
                  </div>
                  <div className="post-stats">
                    <span className="likes-count">{post.likes || 0} likes</span>
                    <span className="comments-count">
                      {post.comments || 0} comments
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Profile;
