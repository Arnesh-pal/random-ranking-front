# 🏆 Real-Time User Ranking Leaderboard

A full-stack web application that allows users to claim random points and view a dynamic, real-time leaderboard. The project demonstrates a modern **MERN-stack architecture** with **WebSockets** for instant updates.

---

## 🌐 Live Demo  
🔗 [View Application](https://random-ranking-front.vercel.app/)

### 📸 Screenshot
<img width="761" height="739" alt="Leaderboard Screenshot" src="https://github.com/user-attachments/assets/79f41ff0-49b0-4488-8633-dcf707035c89" />

---

## ✨ Features

- **Dynamic User Management**: Select from a list of users or add new users to the database.  
- **Point Claiming**: Award random points (1-10) to any user with a single click.  
- **Real-Time Leaderboard**: The user ranking table updates instantly for all connected clients using **WebSockets (Socket.IO)**.  
- **Persistent Data**: User data and point claim history are stored in a **MongoDB database**.  
- **New Leader Celebration**: 🎉 A confetti animation automatically triggers whenever a new user takes the #1 spot.  
- **Modern UI**: A stylish, responsive user interface built with **React**.  
- **Separate Frontend & Backend**: A decoupled architecture, deployed on separate, scalable hosting platforms.  

---

## 🛠️ Tech Stack & Architecture

This project is built with the **MERN stack** and deployed on modern hosting platforms.

### Frontend
- **React.js**: For building the user interface.  
- **Socket.IO Client**: To receive real-time updates from the server.  
- **Axios**: For making API requests to the backend.  
- **FontAwesome**: For UI icons.  

### Backend
- **Node.js**: JavaScript runtime environment.  
- **Express.js**: Web application framework for the API.  
- **Mongoose**: ODM library for MongoDB.  
- **Socket.IO**: Real-time, bidirectional event-based communication.  

### Database
- **MongoDB Atlas**: A fully-managed cloud database service.  

### Deployment
- **Frontend**: Deployed on **Vercel**.  
- **Backend**: Deployed on **Render**.  

---

## 🚀 Getting Started: Local Development Setup

Follow these steps to set up the project locally.

### ✅ Prerequisites
Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (with npm)  
- [Git](https://git-scm.com/)  
- A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account  

---

### ⚙️ Backend Setup

1. Clone the backend repository:
    ```bash
    git clone https://github.com/Arnesh-pal/random-ranking.git
    cd user-ranking-backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add:
    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/user-ranking-db?retryWrites=true&w=majority
    ```

4. Start the backend server:
    ```bash
    node server.js
    ```
    The backend will run on **http://localhost:5001**

---

### 🎨 Frontend Setup

1. Clone the frontend repository:
    ```bash
    git clone https://github.com/Arnesh-pal/random-ranking-front.git
    cd user-ranking-frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Update `src/App.js` to point to your local backend:
    ```javascript
    const API_URL = 'http://localhost:5001';
    ```

4. Start the frontend app:
    ```bash
    npm start
    ```
    The app will open at **http://localhost:3000**

---

## 🔑 Environment Variables

Add the following to your **backend `.env`** file:

```env
MONGO_URI=your-mongodb-atlas-uri
```

For deployment (Render, Vercel), also set:
```
MONGO_URI=your-mongodb-atlas-uri
FRONTEND_URL=https://your-frontend-url.vercel.app
```
