# 📚 Bookstore MERN Project

A full-stack Bookstore application built using MongoDB, Express, React, and Node.js (MERN stack). This project allows users to manage books, add reviews, and perform CRUD operations.

## 🚀 Features

📖 Add, update, and delete books

📝 Add and edit book reviews

🔍 View all books and details

🌍 Full-stack implementation with a MongoDB database

⚡ API built using Express & Node.js

🎨 UI designed with React & Tailwind CSS

🔐 Secure backend with proper validations

✅ Persistent data storage in MongoDB

## 🛠 Tech Stack

Frontend: React, Tailwind CSS

Backend: Node.js, Express.js

Database: MongoDB

API Testing: Postman

State Management: React Hooks

Notifications: Notistack

## 📂 Folder Structure

```plaintext
bookstore-mern-project/
├── backend/
│   ├── config/  # Database configuration
│   ├── models/  # Mongoose models (Book)
│   ├── routes/  # Express routes for books & reviews
│   ├── server.js  # Express server entry point
│   ├── .env  # Environment variables
├── frontend/
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/  # Book list & details pages
│   │   ├── context/  # Global state management
│   │   ├── App.js  # Main React app file
│   │   ├── index.js  # React entry point
├── README.md  # Project documentation
├── package.json  # Dependencies & scripts
```


## 🚀 Getting Started

### 1️⃣ Clone the Repository

git clone https://github.com/yourusername/bookstore-mern.git
cd bookstore-mern

### 2️⃣ Backend Setup

cd backend
npm install   # Install backend dependencies

Create a .env file inside backend with the following:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the backend server:

npm run dev

### 3️⃣ Frontend Setup

cd frontend
npm install   # Install frontend dependencies
npm start     # Start React development server

## 🎯 API Endpoints

### 📌 Books API

| Method | Endpoint        | Description                |
|--------|----------------|----------------------------|
| POST   | `/api/books`   | Add a new book            |
| GET    | `/api/books`   | Get all books             |
| GET    | `/api/books/:id` | Get a single book by ID  |
| PUT    | `/api/books/:id` | Update book details      |
| DELETE | `/api/books/:id` | Delete a book           |

### ✍️ Reviews API

| Method | Endpoint               | Description               |
|--------|-------------------------|---------------------------|
| PUT    | `/api/books/:id/review` | Update or add a book review |
| DELETE | `/api/books/:id/review` | Delete a book review       |


## 🛠 Tools Used

VS Code – Code editor

MongoDB Compass – Database management

Postman – API testing

Git & GitHub – Version control

## 🤝 Contributing

Contributions are welcome! Feel free to fork the repository, create a new branch, and submit a pull request.

## 📜 License

This project is open-source and available under the MIT License.

## 🔗 Connect with Me

GitHub | LinkedIn | Twitter

