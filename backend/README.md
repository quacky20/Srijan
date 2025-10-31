# Backend - MERN Stack Template

Backend API built with Node.js, Express, MongoDB, and JWT authentication.

## Features

- User authentication (Signup/Login) with JWT
- Protected routes with JWT middleware
- CRUD operations for items
- MongoDB database integration
- Password hashing with bcryptjs
- CORS enabled
- Environment variables with dotenv
- Error handling middleware

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas)

## Installation

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your configuration:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-template
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

## Running the Application

### Development mode (with auto-restart):
```bash
npm run dev
```

### Production mode:
```bash
npm start
```

The server will start on `http://localhost:5000`

## API Endpoints

### Authentication Routes

#### Signup
- **POST** `/api/auth/signup`
- Body: `{ "name": "string", "email": "string", "password": "string" }`
- Returns: User object with JWT token

#### Login
- **POST** `/api/auth/login`
- Body: `{ "email": "string", "password": "string" }`
- Returns: User object with JWT token

#### Get Current User
- **GET** `/api/auth/me`
- Headers: `Authorization: Bearer <token>`
- Returns: Current user data

### Items Routes (Protected)

All item routes require authentication token in the header:
`Authorization: Bearer <your_jwt_token>`

#### Get All Items
- **GET** `/api/items`
- Returns: Array of items for the authenticated user

#### Get Single Item
- **GET** `/api/items/:id`
- Returns: Single item object

#### Create Item
- **POST** `/api/items`
- Body: `{ "title": "string", "description": "string" }`
- Returns: Created item object

#### Update Item
- **PUT** `/api/items/:id`
- Body: `{ "title": "string", "description": "string" }`
- Returns: Updated item object

#### Delete Item
- **DELETE** `/api/items/:id`
- Returns: Success message

## Project Structure

```
backend/
├── config/
│   └── db.js                 # Database configuration
├── controllers/
│   ├── authController.js     # Authentication logic
│   └── itemController.js     # CRUD operations logic
├── middleware/
│   ├── authMiddleware.js     # JWT authentication middleware
│   └── errorMiddleware.js    # Error handling middleware
├── models/
│   ├── User.js               # User model schema
│   └── Item.js               # Item model schema
├── routes/
│   ├── authRoutes.js         # Authentication routes
│   └── itemRoutes.js         # Item CRUD routes
├── .env.example              # Environment variables example
├── .gitignore                # Git ignore file
├── package.json              # Dependencies and scripts
└── server.js                 # Entry point
```

## Environment Variables

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT signing
- `NODE_ENV` - Environment (development/production)

## Security Notes

- Always use a strong `JWT_SECRET` in production
- Never commit the `.env` file to version control
- Use HTTPS in production
- Implement rate limiting for production use
- Keep dependencies updated

## License

MIT
