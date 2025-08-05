import React, { useState } from "react";
import "../assets/css/ReviewPage.css";
import Navbar0 from "../components/Navbar0";

const ReviewPage = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [sortBy, setSortBy] = useState("recent");

  const reviews = [
    {
      id: 1,
      blogTitle: "You're using ChatGPT wrong. Here's how to prompt like a pro.",
      reviewer: {
        name: "Sarah Johnson",
        avatar:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150",
        verified: true,
      },
      rating: 5,
      date: "2024-03-15",
      comment:
        "This article completely changed how I approach ChatGPT. The practical tips are gold! I've already seen a huge improvement in my responses.",
      helpful: 24,
      replies: 3,
    },
    {
      id: 2,
      blogTitle:
        "The 1-Minute Introduction That Makes People Remember You Forever",
      reviewer: {
        name: "Mike Chen",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
        verified: false,
      },
      rating: 4,
      date: "2024-03-14",
      comment:
        "Great insights on the halo effect. I tried the technique at a networking event and it really works! Would love to see more psychology-based content.",
      helpful: 18,
      replies: 1,
    },
    {
      id: 3,
      blogTitle: "Learning to sit with my loneliness",
      reviewer: {
        name: "Emma Wilson",
        avatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
        verified: true,
      },
      rating: 5,
      date: "2024-03-13",
      comment:
        "This resonated so deeply with me. Your vulnerability in sharing this journey helps others feel less alone. Beautifully written.",
      helpful: 42,
      replies: 5,
    },
    {
      id: 4,
      blogTitle: "Love Is Not a Feeling",
      reviewer: {
        name: "David Rodriguez",
        avatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
        verified: false,
      },
      rating: 3,
      date: "2024-03-12",
      comment:
        "Interesting perspective, but I think you're oversimplifying the concept of love. It's both a feeling and a choice.",
      helpful: 8,
      replies: 2,
    },
    {
      id: 5,
      blogTitle: "What Keeps my Dad up at Night vs What Doesn't",
      reviewer: {
        name: "Lisa Thompson",
        avatar:
          "https://images.unsplash.com/photo-1502602898536-47ad22581b52?w=150",
        verified: true,
      },
      rating: 5,
      date: "2024-03-11",
      comment:
        "This is hilarious and so relatable! My dad has the same concerns. The generational differences are spot on.",
      helpful: 31,
      replies: 4,
    },
    {
      id: 6,
      blogTitle: "You're using ChatGPT wrong. Here's how to prompt like a pro.",
      reviewer: {
        name: "Alex Kim",
        avatar:
          "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=150",
        verified: false,
      },
      rating: 4,
      date: "2024-03-10",
      comment:
        "As a developer, I found the technical insights very valuable. The examples are practical and easy to implement.",
      helpful: 15,
      replies: 1,
    },
  ];

  const filteredReviews = reviews.filter((review) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "positive") return review.rating >= 4;
    if (selectedFilter === "negative") return review.rating <= 2;
    return true;
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === "recent") return new Date(b.date) - new Date(a.date);
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "helpful") return b.helpful - a.helpful;
    return 0;
  });

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
  const totalReviews = reviews.length;

  return (
    <div className="review-page">
      <Navbar0 />

      <div className="review-container">
        {/* Header Section */}
        <div className="review-header">
          <div className="header-content">
            <h1>Blog Reviews</h1>
            <p>See what readers are saying about your content</p>
          </div>

          <div className="stats-overview">
            <div className="stat-card">
              <div className="stat-number">{averageRating.toFixed(1)}</div>
              <div className="stat-label">Average Rating</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">{totalReviews}</div>
              <div className="stat-label">Total Reviews</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">
                {reviews.filter((r) => r.rating >= 4).length}
              </div>
              <div className="stat-label">Positive Reviews</div>
            </div>
          </div>
        </div>

        {/* Filters and Sorting */}
        <div className="filters-section">
          <div className="filter-group">
            <label>Filter by:</label>
            <select
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Reviews</option>
              <option value="positive">Positive (4-5 stars)</option>
              <option value="negative">Negative (1-2 stars)</option>
            </select>
          </div>

          <div className="filter-group">
            <label>Sort by:</label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="filter-select"
            >
              <option value="recent">Most Recent</option>
              <option value="rating">Highest Rating</option>
              <option value="helpful">Most Helpful</option>
            </select>
          </div>
        </div>

        {/* Reviews List */}
        <div className="reviews-list">
          {sortedReviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-header-section">
                <div className="blog-title">
                  <h3>{review.blogTitle}</h3>
                </div>
                <div className="review-meta">
                  <div className="rating">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`star ${
                          index < review.rating ? "filled" : "empty"
                        }`}
                      >
                        ★
                      </span>
                    ))}
                    <span className="rating-number">({review.rating})</span>
                  </div>
                  <div className="review-date">
                    {new Date(review.date).toLocaleDateString()}
                  </div>
                </div>
              </div>

              <div className="reviewer-info">
                <img
                  src={review.reviewer.avatar}
                  alt={review.reviewer.name}
                  className="reviewer-avatar"
                />
                <div className="reviewer-details">
                  <span className="reviewer-name">
                    {review.reviewer.name}
                    {review.reviewer.verified && (
                      <span className="verified-badge">✓</span>
                    )}
                  </span>
                </div>
              </div>

              <div className="review-content">
                <p>{review.comment}</p>
              </div>

              <div className="review-actions">
                <button className="action-btn helpful-btn">
                  <i className="fa-solid fa-thumbs-up"></i>
                  Helpful ({review.helpful})
                </button>
                <button className="action-btn reply-btn">
                  <i className="fa-solid fa-reply"></i>
                  Reply ({review.replies})
                </button>
                <button className="action-btn share-btn">
                  <i className="fa-solid fa-share"></i>
                  Share
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* No Reviews State */}
        {sortedReviews.length === 0 && (
          <div className="no-reviews">
            <div className="no-reviews-icon">
              <i className="fa-solid fa-comments"></i>
            </div>
            <h3>No reviews found</h3>
            <p>There are no reviews matching your current filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewPage;
