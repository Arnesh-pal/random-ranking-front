# 🏆 Real-Time User Ranking Leaderboard

A full-stack web application that allows users to claim random points and view a dynamic, real-time leaderboard. The project demonstrates a modern MERN-stack architecture with WebSockets for instant updates.
---

#Live Link: https://random-ranking-front.vercel.app/
## ## Features

* **Dynamic User Management**: Select from a list of users or add new users to the database.
* **Point Claiming**: Award random points (1-10) to any user with a single click.
* **Real-Time Leaderboard**: The user ranking table updates instantly for all connected clients using WebSockets (Socket.IO).
* **Persistent Data**: User data and point claim history are stored in a MongoDB database.
* **New Leader Celebration**: A confetti animation automatically triggers whenever a new user takes the #1 spot.
* **Modern UI**: A stylish, responsive user interface built with React.
* **Separate Frontend & Backend**: A decoupled architecture, deployed on separate, scalable hosting platforms.

---

## ## Tech Stack & Architecture

This project is built with the MERN stack and deployed on modern hosting platforms.

* **Frontend**:
    * **React.js**: For building the user interface.
    * **Socket.IO Client**: To receive real-time updates from the server.
    * **Axios**: For making API requests to the backend.
    * **FontAwesome**: For UI icons.

* **Backend**:
    * **Node.js**: JavaScript runtime environment.
    * **Express.js**: Web application framework for the API.
    * **Mongoose**: Object Data Modeling (ODM) library for MongoDB.
    * **Socket.IO**: For enabling real-time, bidirectional event-based communication.

* **Database**:
    * **MongoDB Atlas**: A fully-managed cloud database service.

* **Deployment**:
    * **Frontend**: Deployed on **Vercel**.
    * **Backend**: Deployed on **Render**.

---

## ## Getting Started: Local Development Setup

To get a local copy up and running, follow these simple steps.

### ### Prerequisites

Make sure you have the following installed on your machine:
* [Node.js](https://nodejs.org/) (which includes npm)
* [Git](https://git-scm.com/)
* A free [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register) account.

### ### Backend Setup

1.  **Clone the backend repository:**
    ```bash
    git clone <your-backend-repo-url>
    cd user-ranking-backend
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Create a `.env` file** in the root of the `user-ranking-backend` directory and add your MongoDB connection string:
    ```
    MONGO_URI=mongodb+srv://<username>:<password>@<cluster-url>/user-ranking-db?retryWrites=true&w=majority
    ```

4.  **Start the backend server:**
    ```bash
    node server.js
    ```
    Your backend will be running on `http://localhost:5001`.

### ### Frontend Setup

1.  **Clone the frontend repository in a separate folder:**
    ```bash
    git clone <your-frontend-repo-url>
    cd user-ranking-frontend
    ```

2.  **Install NPM packages:**
    ```bash
    npm install
    ```

3.  **Connect to the local backend:**
    Open `src/App.js` and ensure the `API_URL` is pointing to your local server:
    ```javascript
    const API_URL = 'http://localhost:5001';
    ```

4.  **Start the frontend application:**
    ```bash
    npm start
    ```
    Your React app will open in your browser at `http://localhost:3000`.

---

## ## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file in the backend directory:

* `MONGO_URI`: Your connection string from MongoDB Atlas.

When deploying, you will also need to set these on your hosting provider (Render):

* `MONGO_URI`: The same connection string.
* `FRONTEND_URL`: The live URL of your deployed Vercel frontend.
