import React from "react";
import "../assets/css/BlogPage.css";
import Navbar from "../components/Navbar";

const BlogPage = () => {
  return (
    <div className="blog-page">
      <Navbar />

      {/* Main Content with Sidebar */}
      <div className="main-layout">
        {/* Left Sidebar for Advertisements */}
        <div className="sidebar">
          <div className="ad-container">
            <h3 className="ad-title">Sponsored Content</h3>

            {/* Ad 1 */}
            <div className="ad-card">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300"
                alt="Data Analytics Course"
                className="ad-image"
              />
              <div className="ad-content">
                <h4>Master Data Analytics</h4>
                <p>
                  Learn advanced analytics techniques with our comprehensive
                  course.
                </p>
                <button className="ad-btn">Learn More</button>
              </div>
            </div>

            {/* Ad 2 */}
            <div className="ad-card">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300"
                alt="AI Tools"
                className="ad-image"
              />
              <div className="ad-content">
                <h4>AI Development Tools</h4>
                <p>
                  Discover the latest AI tools and frameworks for developers.
                </p>
                <button className="ad-btn">Explore Tools</button>
              </div>
            </div>

            {/* Ad 3 */}
            <div className="ad-card">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300"
                alt="Tech Conference"
                className="ad-image"
              />
              <div className="ad-content">
                <h4>Tech Conference 2024</h4>
                <p>Join us for the biggest tech conference of the year.</p>
                <button className="ad-btn">Register Now</button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="newsletter-card">
              <h4>Stay Updated</h4>
              <p>Get the latest insights delivered to your inbox.</p>
              <div className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                />
                <button className="newsletter-btn">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Article Content */}
        <div className="article-container">
          <div className="article-header">
            <div className="story-tag">
              <i className="fa-solid fa-star"></i>
              Member-only story
            </div>

            <h1 className="article-title">
              You're using ChatGPT wrong. Here's how to prompt like a pro.
            </h1>

            <p className="article-subtitle">
              Smarter prompts lead to smarter responses.
            </p>

            <div className="author-section">
              <div className="author-info">
                <img
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                  alt="James Wilkins"
                  className="author-avatar"
                />
                <div className="author-details">
                  <span className="author-name">James Wilkins</span>
                  <button className="follow-author-btn">Follow</button>
                </div>
              </div>
              <div className="article-meta">
                <span className="read-time">12 min read</span>
                <span className="publish-date">Jun 5, 2025</span>
              </div>
            </div>

            <div className="engagement-metrics">
              <div className="metrics-left">
                <span className="claps">
                  <i className="fa-solid fa-hands-clapping"></i>
                  3.5K
                </span>
                <span className="comments">
                  <i className="fa-solid fa-comment"></i>
                  211
                </span>
              </div>
              <div className="metrics-right">
                <button className="action-btn" title="Bookmark">
                  <i className="fa-solid fa-bookmark"></i>
                </button>
                <button className="action-btn" title="Listen">
                  <i className="fa-solid fa-play"></i>
                </button>
                <button className="action-btn" title="Share">
                  <i className="fa-solid fa-share"></i>
                </button>
                <button className="action-btn" title="More options">
                  <i className="fa-solid fa-ellipsis"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="article-content">
            <p className="article-intro">
              Discover the powerful psychological technique that can transform
              how people perceive and remember you in just 60 seconds...
            </p>

            <div className="main-illustration">
              <img
                src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800"
                alt="AI Illustration"
                className="article-image"
              />
              <p className="image-caption">Image generated by DALL-E, OpenAI</p>
            </div>

            <div className="highlighted-text">
              <div className="highlight-content">
                Most people use ChatGPT for quick answers. But reframing the way
                I understand Large Language Models (LLMs) like ChatGPT or Gemini
                instantly improved the responses I was able to get. With the
                right prompts, my responses became sharper, more accurate, and
                more tailored to my needs.
              </div>
              <span className="highlight-label">Top highlight</span>
            </div>

            <div className="disclaimer-section">
              <div className="disclaimer-content">
                <strong>Disclaimer:</strong> I'm no professional AI engineer.
                What follows is a blend of research and my own personal insight
                and experience, and I'll flag any assumptions I make as I go. If
                you're a language model expert, feel free to weigh in. I'll
                happily be told that I'm wrong.
              </div>
            </div>

            <p className="article-paragraph">
              Still, this simple change in mindset helped me get way more out of
              ChatGPT by changing the mental model I hold for it. Try these
              ideas out and let the results speak for themselves.
            </p>

            <div className="call-to-action">
              <div className="cta-content">
                <strong>Not a member?</strong> You can read this story,
                completely free, at the link below:
                <a
                  href="https://jdhwilkins.com/youre-using-chatgpt-wrong-heres-how-to-prompt-like-a-pro/"
                  className="cta-link"
                >
                  https://jdhwilkins.com/youre-using-chatgpt-wrong-heres-how-to-prompt-like-a-pro/
                </a>
              </div>
              <div className="comment-count">
                <i className="fa-solid fa-comment"></i>1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
