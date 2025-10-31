# Frontend - MERN Stack Template

Frontend application built with React, Vite, React Router, React Hook Form, and Tailwind CSS.

## Features

- React 18 with Vite for fast development
- React Router DOM for navigation
- React Hook Form for form handling and validation
- Tailwind CSS for styling
- JWT authentication with token storage
- Protected routes
- API service with Axios
- Auth context for state management
- Responsive design
- Login/Signup pages
- Dashboard with CRUD operations

## Prerequisites

- Node.js (v14 or higher)
- Running backend server

## Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory:
```bash
cp .env.example .env
```

4. Update the `.env` file with your backend API URL:
```
VITE_API_URL=http://localhost:5000/api
```

## Running the Application

### Development mode:
```bash
npm run dev
```

The application will start on `http://localhost:5173`

### Build for production:
```bash
npm run build
```

### Preview production build:
```bash
npm run preview
```

## Project Structure

```
frontend/
├── public/                 # Static files
├── src/
│   ├── components/         # Reusable components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   └── PrivateRoute.jsx # Protected route component
│   ├── context/           # React context
│   │   └── AuthContext.jsx # Authentication context
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Landing page
│   │   ├── Login.jsx      # Login page
│   │   ├── Signup.jsx     # Signup page
│   │   └── Dashboard.jsx  # Protected dashboard with CRUD
│   ├── services/          # API services
│   │   ├── api.js         # Axios instance with interceptors
│   │   └── authService.js # Auth and item API calls
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Global styles with Tailwind
├── .env.example           # Environment variables example
├── .gitignore             # Git ignore file
├── index.html             # HTML template
├── package.json           # Dependencies and scripts
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── vite.config.js         # Vite configuration
```

## Available Pages

### Home (`/`)
- Landing page with feature list
- Call-to-action buttons for signup/login
- Public route

### Login (`/login`)
- User login form
- Form validation with React Hook Form
- Public route

### Signup (`/signup`)
- User registration form
- Password confirmation
- Form validation
- Public route

### Dashboard (`/dashboard`)
- Protected route (requires authentication)
- Display user items
- Create new items
- Edit existing items
- Delete items
- Full CRUD functionality

## Authentication

The application uses JWT tokens for authentication:
- Tokens are stored in localStorage
- Tokens are automatically included in API requests
- Expired/invalid tokens redirect to login
- Auth context provides user state throughout the app

## API Integration

The frontend communicates with the backend through:
- Axios instance with base URL from environment variables
- Request interceptors to add JWT tokens
- Response interceptors to handle authentication errors
- Service functions for all API operations

## Styling

- Tailwind CSS for utility-first styling
- Responsive design for mobile, tablet, and desktop
- Custom color scheme with blue primary color
- Consistent spacing and typography

## Environment Variables

- `VITE_API_URL` - Backend API URL (default: http://localhost:5000/api)

## Development Tips

- Vite provides Hot Module Replacement (HMR) for instant updates
- Use React DevTools for debugging
- Check browser console for errors
- Ensure backend server is running before starting frontend

## License

MIT
