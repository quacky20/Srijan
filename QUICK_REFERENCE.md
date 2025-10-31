# MERN Stack Template - Quick Reference

## Project Overview

This is a complete MERN (MongoDB, Express, React, Node.js) stack template with authentication and CRUD operations.

## File Structure Summary

### Backend (15 files)
- **config/db.js** - MongoDB connection
- **models/** - User.js, Item.js (Mongoose schemas)
- **controllers/** - authController.js, itemController.js (business logic)
- **routes/** - authRoutes.js, itemRoutes.js (API endpoints)
- **middleware/** - authMiddleware.js, errorMiddleware.js
- **server.js** - Main entry point

### Frontend (24 files)
- **pages/** - Home.jsx, Login.jsx, Signup.jsx, Dashboard.jsx
- **components/** - Navbar.jsx, PrivateRoute.jsx
- **context/** - AuthContext.jsx (global auth state)
- **services/** - api.js, authService.js (API calls)
- **App.jsx** - Main app with routing

## Key Technologies

### Backend
- Node.js & Express
- MongoDB & Mongoose
- JWT (jsonwebtoken)
- bcryptjs (password hashing)
- CORS
- dotenv

### Frontend
- React 18
- Vite (build tool)
- React Router DOM
- React Hook Form
- Axios
- Tailwind CSS

## API Endpoints

### Authentication
- POST /api/auth/signup - Register user
- POST /api/auth/login - Login user
- GET /api/auth/me - Get current user (protected)

### Items (All Protected)
- GET /api/items - Get all user items
- GET /api/items/:id - Get single item
- POST /api/items - Create item
- PUT /api/items/:id - Update item
- DELETE /api/items/:id - Delete item

## Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/mern-template
JWT_SECRET=your_secret_key
NODE_ENV=development
```

### Frontend (.env)
```
VITE_API_URL=http://localhost:5000/api
```

## Quick Start Commands

### Backend
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT secret
npm run dev  # Starts on port 5000
```

### Frontend
```bash
cd frontend
npm install
cp .env.example .env
npm run dev  # Starts on port 5173
```

## Features Implemented

✅ User authentication with JWT
✅ Password hashing with bcryptjs
✅ Protected routes (frontend & backend)
✅ CRUD operations
✅ Form validation
✅ Error handling
✅ Responsive design
✅ API service with interceptors
✅ Auth context for global state
✅ MongoDB integration
✅ RESTful API design

## Development Tips

1. **Backend**: Use `npm run dev` for auto-restart with nodemon
2. **Frontend**: Vite provides HMR for instant updates
3. **Database**: Ensure MongoDB is running before starting backend
4. **Testing**: Test API endpoints with Postman or Thunder Client
5. **Debugging**: Check browser console and terminal for errors

## Customization Ideas

- Add more models (Profile, Posts, Comments, etc.)
- Implement file uploads
- Add email verification
- Implement forgot password feature
- Add social authentication (Google, GitHub)
- Add admin dashboard
- Implement real-time features with Socket.io
- Add pagination for items list
- Implement search and filters
- Add dark mode toggle

## Production Deployment

Before deploying to production:

1. Add rate limiting (express-rate-limit)
2. Add Helmet.js for security headers
3. Use environment-specific configs
4. Set up HTTPS/SSL
5. Configure MongoDB Atlas for cloud database
6. Build frontend: `npm run build`
7. Serve frontend with Express or use Netlify/Vercel
8. Deploy backend to Heroku/Railway/DigitalOcean
9. Set up CI/CD pipeline
10. Add monitoring and logging

## Common Issues

### MongoDB Connection Error
- Ensure MongoDB is running
- Check connection string in .env

### Port Already in Use
- Change PORT in .env (backend)
- Vite will auto-select next port (frontend)

### CORS Errors
- Verify VITE_API_URL matches backend URL
- Check CORS configuration in server.js

### JWT Token Issues
- Clear localStorage and login again
- Verify JWT_SECRET is set in backend .env

## License

MIT License - Feel free to use this template for your projects!
