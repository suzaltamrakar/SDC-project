import React, { useState, useEffect } from "react";
import "../assets/css/BlogPage.css";
import Navbar0 from "../components/Navbar0";
import { useAuth } from "../context/AuthContext";
import { useFollowing } from "../context/FollowingContext";
import { useNavigate } from "react-router-dom";

function BlogPage() {
  const { user, isAuthenticated } = useAuth();
  const { followUser, unfollowUser, isFollowing } = useFollowing();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [blogForm, setBlogForm] = useState({
    title: "",
    subtitle: "",
    content: "",
    imageUrl: "",
    videoUrl: "",
    tags: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/posts");
        if (response.ok) {
          const data = await response.json();
          setPosts(data);
        } else {
          console.error("Failed to fetch posts");
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBlogForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitBlog = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please login to create blog posts");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          content: `${blogForm.title}\n\n${blogForm.subtitle}\n\n${blogForm.content}`,
          image: blogForm.imageUrl || null,
          videoUrl: blogForm.videoUrl || null,
          tags: blogForm.tags
            .split(",")
            .map((tag) => tag.trim())
            .filter((tag) => tag),
        }),
      });

      if (response.ok) {
        const newPost = await response.json();
        setPosts([newPost, ...posts]);
        setBlogForm({
          title: "",
          subtitle: "",
          content: "",
          imageUrl: "",
          videoUrl: "",
          tags: "",
        });
        setShowCreateForm(false);
        alert("Blog post created successfully!");
      } else {
        alert("Failed to create blog post");
      }
    } catch (error) {
      console.error("Error creating blog post:", error);
      alert("Failed to create blog post");
    }
  };

  const handleFollowUser = (postUser) => {
    if (!isAuthenticated) {
      alert("Please login to follow users");
      return;
    }

    if (postUser.id === user?.id) {
      return; // Don't allow following yourself
    }

    if (isFollowing(postUser.id)) {
      unfollowUser(postUser.id);
    } else {
      followUser(postUser.id, postUser.name);
    }
  };

  if (loading) {
    return (
      <div className="blog-page-container">
        <Navbar0 />
        <div className="loading-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page-container">
      <Navbar0 />
      <div className="blog-page-content">
        {/* Header */}
        <div className="blog-header">
          <h1 className="blog-title">Travel Blogs</h1>
          <p className="blog-subtitle">
            Discover amazing travel stories from around the world
          </p>
          {isAuthenticated && (
            <button
              className="create-blog-btn"
              onClick={() => setShowCreateForm(true)}
            >
              <i className="fas fa-plus"></i>
              Create New Blog
            </button>
          )}
        </div>

        {/* Create Blog Form */}
        {showCreateForm && (
          <div className="create-blog-form-container">
            <div className="create-blog-form">
              <div className="form-header">
                <h2>Create New Blog Post</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowCreateForm(false)}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleSubmitBlog}>
                <div className="form-group">
                  <label htmlFor="title">Title *</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={blogForm.title}
                    onChange={handleInputChange}
                    placeholder="Enter blog title"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subtitle">Subtitle</label>
                  <input
                    type="text"
                    id="subtitle"
                    name="subtitle"
                    value={blogForm.subtitle}
                    onChange={handleInputChange}
                    placeholder="Enter subtitle"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="content">Content *</label>
                  <textarea
                    id="content"
                    name="content"
                    value={blogForm.content}
                    onChange={handleInputChange}
                    placeholder="Write your blog content here..."
                    rows="8"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                      type="url"
                      id="imageUrl"
                      name="imageUrl"
                      value={blogForm.imageUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/image.jpg"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="videoUrl">Video URL</label>
                    <input
                      type="url"
                      id="videoUrl"
                      name="videoUrl"
                      value={blogForm.videoUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com/video.mp4"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="tags">Tags</label>
                  <input
                    type="text"
                    id="tags"
                    name="tags"
                    value={blogForm.tags}
                    onChange={handleInputChange}
                    placeholder="travel, adventure, nepal (comma separated)"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowCreateForm(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="submit-btn">
                    <i className="fas fa-paper-plane"></i>
                    Publish Blog
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Blog Posts Grid */}
        <div className="blog-posts-grid">
          {posts.length === 0 ? (
            <div className="no-posts">
              <i className="fas fa-newspaper"></i>
              <p>No blog posts yet</p>
              {isAuthenticated && (
                <button
                  className="create-first-post-btn"
                  onClick={() => navigate("/dashboard")}
                >
                  Create the First Post
                </button>
              )}
            </div>
          ) : (
            posts.map((post) => (
              <div key={post.id} className="blog-post-card">
                <div className="blog-post-image">
                  {post.image ? (
                    <img src={post.image} alt="Blog post" />
                  ) : (
                    <div className="blog-post-placeholder">
                      <i className="fas fa-image"></i>
                    </div>
                  )}
                </div>
                <div className="blog-post-content">
                  <div className="blog-post-header">
                    <div className="blog-author">
                      <img
                        src={
                          post.user?.avatar ||
                          "https://images.unsplash.com/photo-1535713875002-d1d0c3770cd4?w=40&h=40&fit=crop&crop=face"
                        }
                        alt={post.user?.name}
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <h4 className="author-name">{post.user?.name}</h4>
                        <span className="post-date">{post.timestamp}</span>
                      </div>
                      {/* Follow Button - Only show for other users */}
                      {isAuthenticated && post.user?.id !== user?.id && (
                        <button
                          className={`follow-btn ${
                            isFollowing(post.user?.id) ? "following" : ""
                          }`}
                          onClick={() => handleFollowUser(post.user)}
                        >
                          {isFollowing(post.user?.id) ? "Following" : "Follow"}
                        </button>
                      )}
                    </div>
                    <div className="blog-post-location">
                      <i className="fas fa-map-marker-alt"></i>
                      <span>{post.user?.location || "Unknown Location"}</span>
                    </div>
                  </div>
                  <div className="blog-post-text">
                    <p>{post.content}</p>
                  </div>
                  <div className="blog-post-footer">
                    <div className="blog-post-stats">
                      <span className="likes-count">
                        <i className="fas fa-heart"></i>
                        {post.likes || 0}
                      </span>
                      <span className="comments-count">
                        <i className="fas fa-comment"></i>
                        {post.comments || 0}
                      </span>
                      <span className="shares-count">
                        <i className="fas fa-share"></i>
                        {post.shares || 0}
                      </span>
                    </div>
                    <button className="read-more-btn">Read More</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
