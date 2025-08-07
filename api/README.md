# Travel Diary API

This is the backend API for the Travel Diary application, providing authentication and social media features.

## Features

- User registration and login with JWT authentication
- Password hashing with bcrypt
- Post creation and management
- Like/unlike posts
- User profile management
- JSON-based database

## Installation

1. Navigate to the API directory:
```bash
cd api
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

Or for development with auto-restart:
```bash
npm run dev
```

The API will be available at `http://localhost:3001`

## API Endpoints

### Authentication
- `POST /api/register` - Register a new user
- `POST /api/login` - Login user
- `GET /api/profile` - Get user profile (requires authentication)

### Posts
- `GET /api/posts` - Get all posts
- `POST /api/posts` - Create a new post (requires authentication)
- `POST /api/posts/:id/like` - Like/unlike a post (requires authentication)

### Users
- `GET /api/users` - Get all users

### Health Check
- `GET /api/health` - Check API status

## Database

The API uses a JSON file (`db.json`) as the database. The file contains:
- Users with hashed passwords
- Posts with user relationships
- Comments and likes

## Sample Users

For testing, the following users are pre-configured:

1. **Sarah Johnson**
   - Email: sarah@example.com
   - Password: password

2. **Mike Chen**
   - Email: mike@example.com
   - Password: password

3. **Emma Davis**
   - Email: emma@example.com
   - Password: password

4. **David Wilson**
   - Email: david@example.com
   - Password: password

## Security

- Passwords are hashed using bcrypt
- JWT tokens are used for authentication
- CORS is enabled for frontend integration
- Input validation on all endpoints

## Testing

You can test the API using tools like Postman or curl:

```bash
# Health check
curl http://localhost:3001/api/health

# Login
curl -X POST http://localhost:3001/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"sarah@example.com","password":"password"}'

# Get posts
curl http://localhost:3001/api/posts
```

## Environment Variables

The API uses a simple configuration. For production, consider:
- Moving JWT_SECRET to environment variables
- Using a proper database (PostgreSQL, MongoDB)
- Adding rate limiting
- Implementing refresh tokens 