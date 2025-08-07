import React, { useState, useEffect } from "react";
import "../assets/css/Blogs.css";
import Navbar0 from "../components/Navbar0";
import { useAuth } from "../context/AuthContext";
import { useFollowing } from "../context/FollowingContext";

const Blogs = () => {
  const { user, isAuthenticated } = useAuth();
  const { followUser, unfollowUser, isFollowing, followingList, followingCount } = useFollowing();

  // Debug log to show current following state
  useEffect(() => {
    console.log("Blogs component - Current following state:", {
      followingList,
      followingCount,
      isAuthenticated,
      userId: user?.id
    });
  }, [followingList, followingCount, isAuthenticated, user?.id]);

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      author: {
        id: "author1",
        name: "Alessia Fransisca",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: true,
        publication: "Psyc Digest",
      },
      title: "The 1-Minute Introduction That Makes People Remember You Forever",
      subtitle: 'A Behavioral Scientist\'s Trick to Hack the "Halo Effect"',
      content:
        "Discover the powerful psychological technique that can transform how people perceive and remember you in just 60 seconds...",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
      timestamp: "21h ago",
      likes: "27K",
      comments: "657",
      isBookmarked: false,
    },
    {
      id: 2,
      author: {
        id: "author2",
        name: "Ava Phoenix",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        verified: false,
        publication: null,
      },
      title: "Learning to sit with my loneliness",
      subtitle: "well this is new",
      content:
        "Exploring the depths of solitude and finding peace in the quiet moments of life...",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timestamp: "Apr 27",
      likes: "2.2K",
      comments: "91",
      isBookmarked: true,
    },
    {
      id: 3,
      author: {
        id: "author3",
        name: "Pierz Newton-John",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        verified: true,
        publication: "Thought Thinkers",
      },
      title: "Love Is Not a Feeling",
      subtitle: "It's a way of being in the world",
      content:
        "Understanding love as a conscious choice and daily practice rather than just an emotion...",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
      timestamp: "Apr 26",
      likes: "2.5K",
      comments: "74",
      isBookmarked: false,
    },
    {
      id: 4,
      author: {
        id: "author4",
        name: "Meghan Proulx",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: false,
        publication: "The Belladonna Comedy",
      },
      title: "What Keeps my Dad up at Night vs What Doesn't",
      subtitle: '"This is why men can\'t wear shorts."',
      content:
        "A humorous take on generational differences and the things that truly matter in life...",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timestamp: "2d ago",
      likes: "315",
      comments: "1",
      isBookmarked: false,
    },
  ]);

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

  const toggleBookmark = (blogId) => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === blogId
          ? { ...blog, isBookmarked: !blog.isBookmarked }
          : blog
      )
    );
  };

  const handleFollowUser = (blogAuthor) => {
    if (!isAuthenticated) {
      alert("Please login to follow users");
      return;
    }

    if (blogAuthor.id === user?.id) {
      return; // Don't allow following yourself
    }

    if (isFollowing(blogAuthor.id)) {
      unfollowUser(blogAuthor.id);
    } else {
      followUser(blogAuthor.id, blogAuthor.name);
    }
  };

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

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog = {
      id: blogs.length + 1,
      author: {
        id: user?.id || "currentUser",
        name: "You",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: false,
        publication: null,
      },
      title: newBlog.title,
      subtitle: newBlog.subtitle,
      content: newBlog.content,
      description: newBlog.description,
      tags: newBlog.tags,
      image:
        newBlog.image ||
        (uploadedFiles.length > 0
          ? URL.createObjectURL(uploadedFiles[0].file)
          : "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"),
      timestamp: "Just now",
      likes: "0",
      comments: "0",
      isBookmarked: false,
    };
    setBlogs([blog, ...blogs]);
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
  };

  return (
    <div>
      <Navbar0 />
      <div className="blogs-container">
        <div className="blogs-header">
          <div className="header-content">
            <h1>Travel Blogs</h1>
            <p>Discover stories from around the world</p>
          </div>
          <button className="add-blog-btn" onClick={() => setShowAddBlog(true)}>
            <i className="fa-solid fa-plus"></i>
            Add Blog
          </button>
        </div>

        <div className="blogs-content">
          <div className="blogs-feed">
            {blogs.map((blog) => (
              <article key={blog.id} className="blog-card">
                <div className="blog-content">
                  <div className="blog-header">
                    <div className="author-info">
                      {blog.author.avatar ? (
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="author-avatar"
                        />
                      ) : (
                        <div className="author-avatar-placeholder">
                          <i className="fa-solid fa-user"></i>
                        </div>
                      )}
                      <div className="author-details">
                        {blog.author.publication ? (
                          <span className="publication">
                            In {blog.author.publication} by {blog.author.name}
                            {blog.author.verified && (
                              <i className="fa-solid fa-check-circle verified-badge"></i>
                            )}
                          </span>
                        ) : (
                          <span className="author-name">
                            {blog.author.name}
                          </span>
                        )}
                      </div>
                      {/* Follow Button - Only show for other users */}
                      {isAuthenticated && blog.author.id !== user?.id && (
                        <button
                          className={`follow-btn ${
                            isFollowing(blog.author.id) ? "following" : ""
                          }`}
                          onClick={() => handleFollowUser(blog.author)}
                        >
                          {isFollowing(blog.author.id) ? "Following" : "Follow"}
                        </button>
                      )}
                    </div>
                  </div>

                  <div className="blog-main">
                    <h2 className="blog-title">{blog.title}</h2>
                    <p className="blog-subtitle">{blog.subtitle}</p>
                    <p className="blog-excerpt">{blog.content}</p>
                  </div>

                  <div className="blog-meta">
                    <div className="meta-left">
                      <span className="timestamp">
                        <i className="fa-solid fa-star"></i>
                        {blog.timestamp}
                      </span>
                      <span className="likes">
                        <i className="fa-solid fa-heart"></i>
                        {blog.likes}
                      </span>
                      <span className="comments">
                        <i className="fa-solid fa-comment"></i>
                        {blog.comments}
                      </span>
                    </div>
                    <div className="meta-right">
                      <button className="action-btn hide-btn" title="Hide">
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <button
                        className={`action-btn bookmark-btn ${
                          blog.isBookmarked ? "bookmarked" : ""
                        }`}
                        onClick={() => toggleBookmark(blog.id)}
                        title={
                          blog.isBookmarked ? "Remove bookmark" : "Bookmark"
                        }
                      >
                        <i className="fa-solid fa-bookmark"></i>
                      </button>
                      <button
                        className="action-btn more-btn"
                        title="More options"
                      >
                        <i className="fa-solid fa-ellipsis"></i>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="blog-image">
                  <img src={blog.image} alt={blog.title} />
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Add Blog Modal */}
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
};

export default Blogs;
