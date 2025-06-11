# CampusCart

A full-stack e-commerce platform for students to buy and sell used items like books, electronics, and more within campus.

## Key Features

- Authentication system with JWT tokens
- Product CRUD operations with filtering and search
- File upload for product images
- User management with profiles
- MongoDB models for Users and Products
- Protected routes with middleware
- Error handling and validation

## Main Components

- **Models:** User and Product schemas with validation.
- **Routes:** API endpoints for products, auth, and uploads.
- **Middleware:** Authentication middleware.
- **Server Setup:** Complete server setup with all routes.
- **Database Initialization:** Sample product seeding.

## Getting Started

1. Run `npm install` to install all dependencies
2. Create an `uploads` folder in the root directory for image storage
3. Run `npm run init-db` to seed your database with sample products
4. Start the server with `npm run dev`

## API Endpoints

- `/api/products` – Product operations
- `/api/auth/register` – User registration
- `/api/auth/login` – User authentication
- `/api/upload/image` – Image uploads