import React, { useState } from 'react';
import '../assets/css/Blogs.css';

const Blogs = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      author: {
        name: "Alessia Fransisca",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: true,
        publication: "Psyc Digest"
      },
      title: "The 1-Minute Introduction That Makes People Remember You Forever",
      subtitle: "A Behavioral Scientist's Trick to Hack the \"Halo Effect\"",
      content: "Discover the powerful psychological technique that can transform how people perceive and remember you in just 60 seconds...",
      image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400",
      timestamp: "21h ago",
      likes: "27K",
      comments: "657",
      isBookmarked: false
    },
    {
      id: 2,
      author: {
        name: "Ava Phoenix",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        verified: false,
        publication: null
      },
      title: "Learning to sit with my loneliness",
      subtitle: "well this is new",
      content: "Exploring the depths of solitude and finding peace in the quiet moments of life...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timestamp: "Apr 27",
      likes: "2.2K",
      comments: "91",
      isBookmarked: true
    },
    {
      id: 3,
      author: {
        name: "Pierz Newton-John",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        verified: true,
        publication: "Thought Thinkers"
      },
      title: "Love Is Not a Feeling",
      subtitle: "It's a way of being in the world",
      content: "Understanding love as a conscious choice and daily practice rather than just an emotion...",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=400",
      timestamp: "Apr 26",
      likes: "2.5K",
      comments: "74",
      isBookmarked: false
    },
    {
      id: 4,
      author: {
        name: "Meghan Proulx",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: false,
        publication: "The Belladonna Comedy"
      },
      title: "What Keeps my Dad up at Night vs What Doesn't",
      subtitle: "\"This is why men can't wear shorts.\"",
      content: "A humorous take on generational differences and the things that truly matter in life...",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timestamp: "2d ago",
      likes: "315",
      comments: "1",
      isBookmarked: false
    }
  ]);

  const [showAddBlog, setShowAddBlog] = useState(false);
  const [newBlog, setNewBlog] = useState({
    title: '',
    subtitle: '',
    content: '',
    image: ''
  });

  const toggleBookmark = (blogId) => {
    setBlogs(blogs.map(blog => 
      blog.id === blogId 
        ? { ...blog, isBookmarked: !blog.isBookmarked }
        : blog
    ));
  };

  const handleAddBlog = (e) => {
    e.preventDefault();
    const blog = {
      id: blogs.length + 1,
      author: {
        name: "You",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: false,
        publication: null
      },
      title: newBlog.title,
      subtitle: newBlog.subtitle,
      content: newBlog.content,
      image: newBlog.image || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      timestamp: "Just now",
      likes: "0",
      comments: "0",
      isBookmarked: false
    };
    setBlogs([blog, ...blogs]);
    setNewBlog({ title: '', subtitle: '', content: '', image: '' });
    setShowAddBlog(false);
  };

  return (
    <div className="blogs-container">
      <div className="blogs-header">
        <div className="header-content">
          <h1>Travel Blogs</h1>
          <p>Discover stories from around the world</p>
        </div>
        <button 
          className="add-blog-btn"
          onClick={() => setShowAddBlog(true)}
        >
          <i className="fa-solid fa-plus"></i>
          Add Blog
        </button>
      </div>

      <div className="blogs-content">
        <div className="blogs-feed">
          {blogs.map(blog => (
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
                        <span className="author-name">{blog.author.name}</span>
                      )}
                    </div>
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
                    <button 
                      className="action-btn hide-btn"
                      title="Hide"
                    >
                      <i className="fa-solid fa-minus"></i>
                    </button>
                    <button 
                      className={`action-btn bookmark-btn ${blog.isBookmarked ? 'bookmarked' : ''}`}
                      onClick={() => toggleBookmark(blog.id)}
                      title={blog.isBookmarked ? 'Remove bookmark' : 'Bookmark'}
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
          <div className="modal-content" onClick={e => e.stopPropagation()}>
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
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  value={newBlog.title}
                  onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                  placeholder="Enter blog title..."
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Subtitle</label>
                <input
                  type="text"
                  value={newBlog.subtitle}
                  onChange={(e) => setNewBlog({...newBlog, subtitle: e.target.value})}
                  placeholder="Enter subtitle..."
                />
              </div>
              
              <div className="form-group">
                <label>Content</label>
                <textarea
                  value={newBlog.content}
                  onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                  placeholder="Write your blog content..."
                  rows="4"
                  required
                />
              </div>
              
              <div className="form-group">
                <label>Image URL (optional)</label>
                <input
                  type="url"
                  value={newBlog.image}
                  onChange={(e) => setNewBlog({...newBlog, image: e.target.value})}
                  placeholder="Enter image URL..."
                />
              </div>
              
              <div className="form-actions">
                <button 
                  type="button" 
                  className="cancel-btn"
                  onClick={() => setShowAddBlog(false)}
                >
                  Cancel
                </button>
                <button type="submit" className="submit-btn">
                  <i className="fa-solid fa-plus"></i>
                  Add Blog
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blogs; 