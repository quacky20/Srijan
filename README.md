# Srijan-2026 MERN Stack Template

A full-stack MERN (MongoDB, Express, React, Node.js) application template with authentication, CRUD operations, and modern development practices.

## Features

### Backend
- **Node.js & Express** - RESTful API server
- **MongoDB** - Database with Mongoose ODM
- **JWT Authentication** - Secure signup/login with JSON Web Tokens
- **Protected Routes** - Middleware-based route protection
- **CRUD Operations** - Complete Create, Read, Update, Delete functionality
- **Proper Structure** - Organized with models, routes, controllers, and middleware
- **CORS Enabled** - Cross-Origin Resource Sharing configured
- **Environment Variables** - Secure configuration with dotenv

### Frontend
- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **React Hook Form** - Efficient form handling and validation
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **JWT Storage** - Secure token management
- **Responsive Design** - Mobile-first, works on all devices
- **Protected Routes** - Authentication-based navigation
- **Context API** - Global state management

## Project Structure

```
Srijan-2026/
├── backend/                # Backend API
│   ├── config/            # Configuration files
│   ├── controllers/       # Request handlers
│   ├── middleware/        # Custom middleware
│   ├── models/            # Database models
│   ├── routes/            # API routes
│   ├── .env.example       # Environment variables template
│   ├── .gitignore         # Git ignore rules
│   ├── package.json       # Dependencies and scripts
│   ├── README.md          # Backend documentation
│   └── server.js          # Entry point
│
├── frontend/              # Frontend React app
│   ├── public/            # Static files
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   ├── context/       # React context
│   │   ├── pages/         # Page components
│   │   ├── services/      # API services
│   │   ├── App.jsx        # Main app component
│   │   └── main.jsx       # Entry point
│   ├── .env.example       # Environment variables template
│   ├── .gitignore         # Git ignore rules
│   ├── package.json       # Dependencies and scripts
│   ├── README.md          # Frontend documentation
│   ├── tailwind.config.js # Tailwind configuration
│   └── vite.config.js     # Vite configuration
│
└── README.md              # This file
```

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher) - [Download](https://nodejs.org/)
- **MongoDB** (local or MongoDB Atlas account) - [Download](https://www.mongodb.com/try/download/community)
- **npm** or **yarn** package manager

## Quick Start

### 1. Clone the repository
```bash
git clone https://github.com/Abhi-2765/Srijan-2026.git
cd Srijan-2026
```

### 2. Setup Backend

```bash
cd backend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configuration
# Update MongoDB URI and JWT secret
nano .env  # or use your preferred editor

# Start the backend server
npm run dev
```

Backend will run on `http://localhost:5000`

### 3. Setup Frontend

Open a new terminal window:

```bash
cd frontend

# Install dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file if needed (default API URL is correct for local development)
nano .env  # or use your preferred editor

# Start the frontend development server
npm run dev
```

Frontend will run on `http://localhost:5173`

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-template
JWT_SECRET=your_super_secret_jwt_key_here
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Items (Protected)
- `GET /api/items` - Get all items for user
- `GET /api/items/:id` - Get single item
- `POST /api/items` - Create new item
- `PUT /api/items/:id` - Update item
- `DELETE /api/items/:id` - Delete item

## Application Pages

- **Home** (`/`) - Landing page with features
- **Login** (`/login`) - User login page
- **Signup** (`/signup`) - User registration page
- **Dashboard** (`/dashboard`) - Protected page with CRUD operations

## Development

### Backend Development
```bash
cd backend
npm run dev  # Runs with nodemon for auto-restart
```

### Frontend Development
```bash
cd frontend
npm run dev  # Runs with Vite HMR
```

## Building for Production

### Backend
```bash
cd backend
npm start
```

### Frontend
```bash
cd frontend
npm run build
npm run preview  # Preview production build
```

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- CORS
- dotenv

### Frontend
- React 18
- Vite
- React Router DOM
- React Hook Form
- Axios
- Tailwind CSS

## Security Features

- Password hashing with bcryptjs
- JWT token-based authentication
- Protected API routes
- CORS configuration
- Environment variable security
- Input validation
- XSS protection

## Best Practices

- Proper error handling
- Async/await patterns
- RESTful API design
- Component-based architecture
- Responsive design
- Code organization and modularity
- Environment-based configuration

## Common Issues & Solutions

### MongoDB Connection Error
- Ensure MongoDB is running locally or your connection string is correct
- Check if MongoDB service is started: `sudo systemctl start mongodb` (Linux) or `brew services start mongodb-community` (Mac)

### Port Already in Use
- Backend: Change `PORT` in backend `.env` file
- Frontend: Vite will automatically use next available port

### CORS Errors
- Ensure backend CORS is properly configured
- Check that `VITE_API_URL` in frontend `.env` matches backend URL

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For issues and questions, please open an issue in the GitHub repository.

## Acknowledgments

- Created as a template for Srijan-2026 website
- Built with modern web development best practices
- Designed for easy customization and extension
