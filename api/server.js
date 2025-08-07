const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'your-secret-key-change-in-production';

// Create uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Generate unique filename with timestamp
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ 
  storage: storage,
  limits: {
    fileSize: 5 * 1024 * 1024 // 5MB limit
  },
  fileFilter: function (req, file, cb) {
    // Allow only image files
    if (file.mimetype.startsWith('image/')) {
      cb(null, true);
    } else {
      cb(new Error('Only image files are allowed!'), false);
    }
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// Serve uploaded files statically
app.use('/uploads', express.static(uploadsDir));

// Database file path
const dbPath = path.join(__dirname, 'db.json');

// Helper function to read database
function readDB() {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading database:', error);
    return { users: [], posts: [], comments: [] };
  }
}

// Helper function to write database
function writeDB(data) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error('Error writing database:', error);
    return false;
  }
}

// Helper function to generate JWT token
function generateToken(user) {
  return jwt.sign(
    { 
      id: user.id, 
      email: user.email, 
      name: user.name 
    }, 
    JWT_SECRET, 
    { expiresIn: '24h' }
  );
}

// Helper function to verify JWT token
function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  
  if (!token) {
    return res.status(401).json({ error: 'Access token required' });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// Routes

// Register new user
app.post('/api/register', async (req, res) => {
  try {
    const { name, email, password, location } = req.body;

    // Validate input
    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Name, email, and password are required' });
    }

    const db = readDB();
    
    // Check if user already exists
    const existingUser = db.users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: db.users.length + 1,
      name,
      email,
      password: hashedPassword,
      location: location || 'Unknown Location',
      avatar: `https://images.unsplash.com/photo-1535713875002-d1d0c3770cd4?w=150&h=150&fit=crop&crop=face`,
      createdAt: new Date().toISOString()
    };

    db.users.push(newUser);
    
    if (writeDB(db)) {
      // Generate token
      const token = generateToken(newUser);
      
      res.status(201).json({
        message: 'User registered successfully',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          location: newUser.location,
          avatar: newUser.avatar
        },
        token
      });
    } else {
      res.status(500).json({ error: 'Failed to save user' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login user
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const db = readDB();
    
    // Find user by email
    const user = db.users.find(user => user.email === email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    // Generate token
    const token = generateToken(user);
    
    res.json({
      message: 'Login successful',
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        location: user.location,
        avatar: user.avatar
      },
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get user profile (protected route)
app.get('/api/profile', verifyToken, (req, res) => {
  try {
    const db = readDB();
    const user = db.users.find(user => user.id === req.user.id);
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      id: user.id,
      name: user.name,
      email: user.email,
      location: user.location,
      avatar: user.avatar,
      createdAt: user.createdAt
    });
  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all posts
app.get('/api/posts', (req, res) => {
  try {
    const db = readDB();
    const posts = db.posts.map(post => {
      const user = db.users.find(u => u.id === post.userId);
      return {
        ...post,
        user: {
          name: user ? user.name : 'Unknown User',
          avatar: user ? user.avatar : '',
          location: user ? user.location : ''
        }
      };
    });
    
    res.json(posts);
  } catch (error) {
    console.error('Posts error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Create new post (protected route)
app.post('/api/posts', verifyToken, (req, res) => {
  try {
    const { content, image } = req.body;
    
    if (!content) {
      return res.status(400).json({ error: 'Post content is required' });
    }

    const db = readDB();
    
    const newPost = {
      id: db.posts.length + 1,
      userId: req.user.id,
      content,
      image: image || null,
      likes: 0,
      comments: 0,
      shares: 0,
      timestamp: new Date().toISOString(),
      likedBy: []
    };

    db.posts.unshift(newPost);
    
    if (writeDB(db)) {
      const user = db.users.find(u => u.id === req.user.id);
      res.status(201).json({
        ...newPost,
        user: {
          name: user ? user.name : 'Unknown User',
          avatar: user ? user.avatar : '',
          location: user ? user.location : ''
        }
      });
    } else {
      res.status(500).json({ error: 'Failed to save post' });
    }
  } catch (error) {
    console.error('Create post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Like/Unlike post (protected route)
app.post('/api/posts/:postId/like', verifyToken, (req, res) => {
  try {
    const { postId } = req.params;
    const db = readDB();
    
    const post = db.posts.find(p => p.id === parseInt(postId));
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }

    const userLiked = post.likedBy.includes(req.user.id);
    
    if (userLiked) {
      // Unlike
      post.likedBy = post.likedBy.filter(id => id !== req.user.id);
      post.likes--;
    } else {
      // Like
      post.likedBy.push(req.user.id);
      post.likes++;
    }

    if (writeDB(db)) {
      res.json({ 
        likes: post.likes, 
        liked: !userLiked 
      });
    } else {
      res.status(500).json({ error: 'Failed to update post' });
    }
  } catch (error) {
    console.error('Like post error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update user profile (protected route)
app.put('/api/profile/:userId', verifyToken, upload.single('avatar'), (req, res) => {
  try {
    const { userId } = req.params;
    const db = readDB();
    
    // Find user
    const userIndex = db.users.findIndex(u => u.id === parseInt(userId));
    if (userIndex === -1) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check if user is updating their own profile
    if (req.user.id !== parseInt(userId)) {
      return res.status(403).json({ error: 'Unauthorized to update this profile' });
    }

    const user = db.users[userIndex];
    
    // Update user fields
    if (req.body.name) user.name = req.body.name;
    if (req.body.bio) user.bio = req.body.bio;
    if (req.body.location) user.location = req.body.location;
    if (req.body.website) user.website = req.body.website;
    if (req.body.phone) user.phone = req.body.phone;
    if (req.body.dateOfBirth) user.dateOfBirth = req.body.dateOfBirth;
    if (req.body.city) user.city = req.body.city;
    if (req.body.state) user.state = req.body.state;
    if (req.body.country) user.country = req.body.country;
    if (req.body.languages) user.languages = req.body.languages;
    if (req.body.interests) user.interests = req.body.interests;

    // Handle avatar upload
    if (req.file) {
      user.avatar = `http://localhost:3001/uploads/${req.file.filename}`;
    }

    // Save to database
    if (writeDB(db)) {
      // Return updated user (without password)
      const { password, ...userResponse } = user;
      res.json({
        message: 'Profile updated successfully',
        user: userResponse
      });
    } else {
      res.status(500).json({ error: 'Failed to update profile' });
    }
  } catch (error) {
    console.error('Update profile error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get all users (for online friends feature)
app.get('/api/users', (req, res) => {
  try {
    const db = readDB();
    const users = db.users.map(user => ({
      id: user.id,
      name: user.name,
      avatar: user.avatar,
      location: user.location
    }));
    
    res.json(users);
  } catch (error) {
    console.error('Users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Travel Diary API is running' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Travel Diary API server running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
}); 