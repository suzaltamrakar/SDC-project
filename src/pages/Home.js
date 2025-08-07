import React, { useState, useEffect } from "react";
import "../assets/css/Home.css";
import Navbar0 from "../components/Navbar0";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Home() {
  const { user, getAuthHeaders, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [newPost, setNewPost] = useState("");
  const [showCreatePost, setShowCreatePost] = useState(false);

  // Blog creation states (copied from Blogs.js)
  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: "",
    subtitle: "",
    content: "",
    image: "",
    description: "",
    tags: [],
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadProgress, setUploadProgress] = useState({});

  const predefinedTags = [
    "Adventure",
    "Culture",
    "Food",
    "Nature",
    "Photography",
  ];
  const [customTag, setCustomTag] = useState("");

  // Fetch posts from API
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

  const handleLike = async (postId) => {
    if (!isAuthenticated) {
      alert("Please login to like posts");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/posts/${postId}/like`,
        {
          method: "POST",
          headers: getAuthHeaders(),
        }
      );

      if (response.ok) {
        const data = await response.json();
        setPosts(
          posts.map((post) => {
            if (post.id === postId) {
              return {
                ...post,
                likes: data.likes,
                likedBy: data.liked
                  ? [...(post.likedBy || []), user.id]
                  : (post.likedBy || []).filter((id) => id !== user.id),
              };
            }
            return post;
          })
        );
      }
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleCreatePost = async (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      alert("Please login to create posts");
      return;
    }

    if (newPost.trim()) {
      try {
        const response = await fetch("http://localhost:3001/api/posts", {
          method: "POST",
          headers: getAuthHeaders(),
          body: JSON.stringify({
            content: newPost,
            image: null,
          }),
        });

        if (response.ok) {
          const newPostData = await response.json();
          setPosts([newPostData, ...posts]);
          setNewPost("");
          setShowCreatePost(false);
        } else {
          alert("Failed to create post");
        }
      } catch (error) {
        console.error("Error creating post:", error);
        alert("Failed to create post");
      }
    }
  };

  // Blog creation functions (copied from Blogs.js)
  const handleFileUpload = (files) => {
    const fileArray = Array.from(files);
    const newFiles = fileArray.map((file, index) => ({
      id: Date.now() + index,
      file,
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      status: "uploading",
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);

    // Simulate upload progress
    newFiles.forEach((fileObj) => {
      simulateUpload(fileObj.id);
    });
  };

  const simulateUpload = (fileId) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 30;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        setUploadedFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? { ...file, progress: 100, status: "completed" }
              : file
          )
        );
      } else {
        setUploadedFiles((prev) =>
          prev.map((file) =>
            file.id === fileId
              ? { ...file, progress: Math.round(progress) }
              : file
          )
        );
      }
    }, 200);
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const addTag = (tag) => {
    if (tag && !newBlog.tags.includes(tag)) {
      setNewBlog((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  const removeTag = (tagToRemove) => {
    setNewBlog((prev) => ({
      ...prev,
      tags: prev.tags.filter((tag) => tag !== tagToRemove),
    }));
  };

  const handleCustomTagAdd = () => {
    if (customTag.trim()) {
      addTag(customTag.trim());
      setCustomTag("");
    }
  };

  const handleAddBlog = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      alert("Please login to create blogs");
      return;
    }

    if (!newBlog.title.trim() || !newBlog.description.trim()) {
      alert("Please fill in title and description");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/posts", {
        method: "POST",
        headers: getAuthHeaders(),
        body: JSON.stringify({
          content: newBlog.description,
          title: newBlog.title,
          tags: newBlog.tags,
          image:
            uploadedFiles.length > 0
              ? URL.createObjectURL(uploadedFiles[0].file)
              : null,
        }),
      });

      if (response.ok) {
        const newPostData = await response.json();
        setPosts([newPostData, ...posts]);

        // Reset form
        setNewBlog({
          title: "",
          subtitle: "",
          content: "",
          image: "",
          description: "",
          tags: [],
        });
        setUploadedFiles([]);
        setCustomTag("");
        setShowAddBlog(false);

        alert("Blog created successfully!");
      } else {
        alert("Failed to create blog");
      }
    } catch (error) {
      console.error("Error creating blog:", error);
      alert("Failed to create blog. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="home-container">
        <Navbar0 />
        <div className="loading-container">
          <div className="loading-spinner">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="home-container">
      <Navbar0 />
      <div className="home-content">
        {/* Left Sidebar */}
        <div className="sidebar left-sidebar">
          <div className="sidebar-section">
            <h3>Quick Actions</h3>
            <ul className="sidebar-menu">
              <li
                onClick={() => navigate("/dashboard")}
                className="sidebar-menu-item"
              >
                <i className="fas fa-home"></i> Home
              </li>
              <li
                onClick={() => navigate("/destination")}
                className="sidebar-menu-item"
              >
                <i className="fas fa-map-marker-alt"></i> Destinations
              </li>
              <li
                onClick={() => navigate("/tripdetails")}
                className="sidebar-menu-item"
              >
                <i className="fas fa-book"></i> My Trips
              </li>
              <li
                onClick={() => navigate("/blogs")}
                className="sidebar-menu-item"
              >
                <i className="fas fa-heart"></i> Saved
              </li>
              <li
                onClick={() => navigate("/maps")}
                className="sidebar-menu-item"
              >
                <i className="fas fa-users"></i> Friends
              </li>
            </ul>
          </div>

          <div className="sidebar-section">
            <h3>Trending Destinations</h3>
            <div className="trending-item">
              <img
                src="https://images.unsplash.com/photo-1548013146-724df68c6d3b?w=60&h=60&fit=crop"
                alt="Bhaktapur"
              />
              <span>Bhaktapur Durbar Square</span>
            </div>
            <div className="trending-item">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=60&h=60&fit=crop"
                alt="Annapurna"
              />
              <span>Annapurna Circuit</span>
            </div>
            <div className="trending-item">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=60&h=60&fit=crop"
                alt="Lumbini"
              />
              <span>Lumbini</span>
            </div>
          </div>
        </div>

        {/* Main Feed */}
        <div className="main-feed">
          {/* Create Post */}
          <div className="create-post-card">
            <div className="create-post-header">
              <img
                src={
                  user?.avatar ||
                  "https://images.unsplash.com/photo-1535713875002-d1d0c3770cd4?w=50&h=50&fit=crop&crop=face"
                }
                alt="Your Avatar"
                className="user-avatar"
                onClick={() => navigate("/profile")}
                style={{ cursor: "pointer" }}
              />
              <button
                className="create-post-input"
                onClick={() => {
                  if (!isAuthenticated) {
                    alert("Please login to create posts");
                    return;
                  }
                  setShowAddBlog(true);
                }}
              >
                {isAuthenticated
                  ? "What's on your mind?"
                  : "Login to create a post"}
              </button>
            </div>

            {showCreatePost && (
              <form onSubmit={handleCreatePost} className="create-post-form">
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your travel experience..."
                  className="post-textarea"
                />
                <div className="create-post-actions">
                  <button type="submit" className="post-btn">
                    Post
                  </button>
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowCreatePost(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Posts Feed */}
          <div className="posts-container">
            {posts.map((post) => (
              <div key={post.id} className="post-card">
                <div className="post-header">
                  <div className="post-user-info">
                    <img
                      src={post.user.avatar}
                      alt={post.user.name}
                      className="user-avatar"
                    />
                    <div className="user-details">
                      <h4 className="user-name">{post.user.name}</h4>
                      <p className="user-location">{post.user.location}</p>
                      <span className="post-timestamp">{post.timestamp}</span>
                    </div>
                  </div>
                  <button className="post-menu-btn">
                    <i className="fas fa-ellipsis-h"></i>
                  </button>
                </div>

                <div className="post-content">
                  <p className="post-text">{post.content}</p>
                  {post.image && (
                    <img src={post.image} alt="Post" className="post-image" />
                  )}
                </div>

                <div className="post-stats">
                  <div className="stats-left">
                    <span className="likes-count">{post.likes} likes</span>
                    <span className="comments-count">
                      {post.comments} comments
                    </span>
                    <span className="shares-count">{post.shares} shares</span>
                  </div>
                </div>

                <div className="post-actions">
                  <button
                    className={`action-btn ${
                      (post.likedBy || []).includes(user?.id) ? "liked" : ""
                    }`}
                    onClick={() => handleLike(post.id)}
                  >
                    <i
                      className={`fas fa-heart ${
                        (post.likedBy || []).includes(user?.id) ? "liked" : ""
                      }`}
                    ></i>
                    Like
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-comment"></i>
                    Comment
                  </button>
                  <button className="action-btn">
                    <i className="fas fa-share"></i>
                    Share
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="sidebar right-sidebar">
          <div className="sidebar-section">
            <h3>Friends Online</h3>
            <div className="online-friend">
              <img
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face"
                alt="Sarah"
              />
              <span>Sarah Johnson</span>
              <div className="online-indicator"></div>
            </div>
            <div className="online-friend">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face"
                alt="Mike"
              />
              <span>Mike Chen</span>
              <div className="online-indicator"></div>
            </div>
            <div className="online-friend">
              <img
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face"
                alt="Emma"
              />
              <span>Emma Davis</span>
              <div className="online-indicator"></div>
            </div>
          </div>

          <div className="sidebar-section">
            <h3>Suggested for You</h3>
            <div className="suggestion-item">
              <img
                src="https://images.unsplash.com/photo-1548013146-724df68c6d3b?w=50&h=50&fit=crop"
                alt="Bhaktapur"
              />
              <div>
                <h4>Bhaktapur Travel Guide</h4>
                <p>Discover ancient Newari architecture</p>
              </div>
            </div>
            <div className="suggestion-item">
              <img
                src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=50&h=50&fit=crop"
                alt="Trekking"
              />
              <div>
                <h4>Annapurna Trek Tips</h4>
                <p>Essential guide for trekkers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Blog Modal (copied from Blogs.js) */}
        {showAddBlog && (
          <div className="modal-overlay" onClick={() => setShowAddBlog(false)}>
            <div
              className="modal-content platform-form"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <h2>Add New Blog</h2>
                <button
                  className="close-btn"
                  onClick={() => setShowAddBlog(false)}
                >
                  <i className="fa-solid fa-times"></i>
                </button>
              </div>

              <form onSubmit={handleAddBlog} className="add-blog-form">
                <div className="form-layout">
                  {/* Left side - File Upload */}
                  <div className="upload-section">
                    <h3>File Upload</h3>
                    <div
                      className={`file-upload-area ${
                        isDragOver ? "drag-over" : ""
                      }`}
                      onDrop={handleDrop}
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                    >
                      <div className="upload-circle">
                        <div className="upload-progress">60%</div>
                        <div className="upload-icon">
                          <i className="fa-solid fa-cloud-arrow-up"></i>
                        </div>
                      </div>
                      <div className="upload-text">
                        <span>Drag and Drop</span>
                        <span>or Browse</span>
                      </div>
                    </div>

                    {/* File List */}
                    <div className="file-list">
                      {uploadedFiles.map((file) => (
                        <div key={file.id} className="file-item">
                          <div className="file-info">
                            <i className="fa-solid fa-file"></i>
                            <span className="file-name">{file.name}</span>
                          </div>
                          <div className="file-progress">
                            <div className="progress-bar">
                              <div
                                className="progress-fill"
                                style={{ width: `${file.progress}%` }}
                              ></div>
                            </div>
                            <span className="progress-text">
                              {file.progress}%
                            </span>
                          </div>
                          <div className="file-actions">
                            {file.status === "completed" && (
                              <i className="fa-solid fa-check success-icon"></i>
                            )}
                            <button
                              type="button"
                              className="remove-file-btn"
                              onClick={() => removeFile(file.id)}
                            >
                              <i className="fa-solid fa-times"></i>
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    <input
                      type="file"
                      id="file-input"
                      multiple
                      accept="image/*,video/*"
                      style={{ display: "none" }}
                      onChange={(e) => handleFileUpload(e.target.files)}
                    />
                    <label htmlFor="file-input" className="browse-btn">
                      Browse Files
                    </label>
                  </div>

                  {/* Right side - Form Fields */}
                  <div className="form-fields">
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        value={newBlog.title}
                        onChange={(e) =>
                          setNewBlog({ ...newBlog, title: e.target.value })
                        }
                        placeholder="Tamil"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label>Description</label>
                      <textarea
                        value={newBlog.description}
                        onChange={(e) =>
                          setNewBlog({
                            ...newBlog,
                            description: e.target.value,
                          })
                        }
                        placeholder="Write a detailed description"
                        rows="4"
                        required
                      />
                      <small className="form-hint">
                        **You will be able to edit this information later
                      </small>
                    </div>

                    <div className="form-group">
                      <label>Tags</label>
                      <div className="tags-container">
                        <div className="predefined-tags">
                          {predefinedTags.map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              className={`tag-btn ${
                                newBlog.tags.includes(tag) ? "selected" : ""
                              }`}
                              onClick={() => addTag(tag)}
                            >
                              {tag}
                            </button>
                          ))}
                        </div>
                        <div className="custom-tag-input">
                          <input
                            type="text"
                            value={customTag}
                            onChange={(e) => setCustomTag(e.target.value)}
                            placeholder="Add custom tag"
                            onKeyPress={(e) =>
                              e.key === "Enter" &&
                              (e.preventDefault(), handleCustomTagAdd())
                            }
                          />
                          <button
                            type="button"
                            className="add-tag-btn"
                            onClick={handleCustomTagAdd}
                          >
                            Add
                          </button>
                        </div>
                        <div className="selected-tags">
                          {newBlog.tags.map((tag) => (
                            <span key={tag} className="selected-tag">
                              {tag}
                              <button
                                type="button"
                                onClick={() => removeTag(tag)}
                                className="remove-tag-btn"
                              >
                                <i className="fa-solid fa-times"></i>
                              </button>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="cancel-btn"
                    onClick={() => setShowAddBlog(false)}
                  >
                    Cancel
                  </button>
                  <button type="submit" className="publish-btn">
                    Publish
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
