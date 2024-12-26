
# Shopper Express E-Commerce API

Welcome to the **Shopper Express API** repository! This API serves as the backend for an e-commerce platform that facilitates the management of products, categories, users, orders, and more. The API is designed to be scalable, secure, and flexible to meet the needs of various e-commerce applications.

---

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
    - [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
    - [Authentication](#authentication)
    - [Products](#products)
    - [Categories](#categories)
    - [Orders](#orders)
    - [Users](#users)
- [Testing](#testing)
- [License](#license)
- [Contact](#contact)

---

## About

The **Shopper Express API** is a RESTful API built with Express.js to power an e-commerce platform. It provides functionality for managing key e-commerce entities like products, categories, users, and orders. The API is designed to allow seamless integration with mobile apps, web frontends, or other external services.

---

## Getting Started

### Prerequisites

Before you can run this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/)
- A database such as [MongoDB](https://www.mongodb.com/) or [MySQL](https://www.mysql.com/) (depending on your configuration)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Trend20/expressjs-shoppers-api.git
   cd expressjs-shoppers-api
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and set up your environment variables (see below).

4. Start the server in development mode:
   ```bash
   npm run dev
   ```

   The server will start running at `http://localhost:5000`.

### Environment Variables

Make sure to set the following environment variables in your `.env` file:

```env
PORT=5000
DB_URI=mongodb://localhost:27017/shopper_express
JWT_SECRET=your_jwt_secret_key
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

- **PORT**: The port on which the server will run (default is 5000).
- **DB_URI**: MongoDB connection URI (or any other database you prefer).
- **JWT_SECRET**: Secret key for JWT authentication.
- **SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS**: SMTP server settings for sending emails (e.g., for password resets).

---

## API Documentation

The **Shopper Express API** provides several endpoints for managing users, products, categories, and orders.

### Authentication

#### Register a new user

- **Endpoint**: `POST /auth/register`
- **Description**: Register a new user by providing their username, email, and password.
- **Request Body**:
  ```json
  {
    "username": "john_doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Responses**:
    - `201` - User registered successfully.
    - `400` - User with this email already exists.
    - `500` - Internal server error.

#### Log in a user

- **Endpoint**: `POST /auth/login`
- **Description**: Log in an existing user by email and password, returning a JWT token.
- **Request Body**:
  ```json
  {
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Responses**:
    - `200` - Successful login, returns JWT token.
    - `401` - Unauthorized (invalid credentials).
    - `500` - Internal server error.

#### Request password reset

- **Endpoint**: `POST /auth/forgot-password`
- **Description**: Request a password reset for the provided email.
- **Request Body**:
  ```json
  {
    "email": "john@example.com"
  }
  ```
- **Responses**:
    - `200` - Password reset email sent successfully.
    - `401` - User with the provided email does not exist.
    - `500` - Internal server error.

#### Reset password

- **Endpoint**: `POST /auth/reset-password`
- **Description**: Reset the password using the user ID, token, and new password.
- **Request Body**:
  ```json
  {
    "userId": "user123",
    "token": "reset_token",
    "password": "newpassword123"
  }
  ```
- **Responses**:
    - `200` - Password reset successfully.
    - `401` - Invalid or expired password reset token.
    - `500` - Internal server error.

### Products

#### Add a new product

- **Endpoint**: `POST /products`
- **Description**: Add a new product to the store.
- **Request Body**:
  ```json
  {
    "name": "Product A",
    "price": 100.00,
    "description": "This is a great product.",
    "categoryId": "category123",
    "stock": 50
  }
  ```
- **Responses**:
    - `201` - Product added successfully.
    - `400` - Invalid product data.
    - `500` - Internal server error.

#### Get all products

- **Endpoint**: `GET /products`
- **Description**: Fetch a list of all products.
- **Responses**:
    - `200` - Returns a list of products.
    - `500` - Internal server error.

### Categories

#### Add a new category

- **Endpoint**: `POST /categories`
- **Description**: Add a new category for products.
- **Request Body**:
  ```json
  {
    "name": "Electronics"
  }
  ```
- **Responses**:
    - `201` - Category added successfully.
    - `400` - Invalid category data.
    - `500` - Internal server error.

#### Get all categories

- **Endpoint**: `GET /categories`
- **Description**: Fetch a list of all categories.
- **Responses**:
    - `200` - Returns a list of categories.
    - `500` - Internal server error.

### Orders

#### Place an order

- **Endpoint**: `POST /orders`
- **Description**: Place a new order for a user.
- **Request Body**:
  ```json
  {
    "userId": "user123",
    "products": [
      {
        "productId": "product123",
        "quantity": 2
      }
    ],
    "totalPrice": 200.00
  }
  ```
- **Responses**:
    - `201` - Order placed successfully.
    - `400` - Invalid order data.
    - `500` - Internal server error.

#### Get all orders for a user

- **Endpoint**: `GET /orders/{userId}`
- **Description**: Fetch all orders placed by a user.
- **Responses**:
    - `200` - Returns a list of orders for the specified user.
    - `500` - Internal server error.

### Users

#### Get user profile

- **Endpoint**: `GET /users/{userId}`
- **Description**: Fetch the profile information of a user.
- **Responses**:
    - `200` - Returns user profile.
    - `500` - Internal server error.

---

## Testing

To run the tests for the API:

1. Install testing dependencies:
   ```bash
   npm install --save-dev jest supertest
   ```

2. Run tests:
   ```bash
   npm test
   ```

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/devenock/expressjs-shoppers-api/blob/main/LICENSE) file for details.

---

## Contact

For any inquiries, please contact:

- **Enock Omondi**
- Email: [enockomondi305@gmail.com](mailto:enockomondi305@gmail.com)
- GitHub: [Trend20](https://github.com/Trend20)

---