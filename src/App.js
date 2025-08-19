import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import './App.css';

// --- 1. Import ReactConfetti ---
import ReactConfetti from 'react-confetti';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCrown } from '@fortawesome/free-solid-svg-icons';

const API_URL = 'https://user-ranking-api.onrender.com';
const socket = io(API_URL);

function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [leaderboard, setLeaderboard] = useState([]);
  const [newUserName, setNewUserName] = useState('');

  // --- 2. Add new state for confetti and tracking the leader ---
  const [showConfetti, setShowConfetti] = useState(false);
  const [leaderId, setLeaderId] = useState(null); // To track the ID of the #1 user

  useEffect(() => {
    axios.get(`${API_URL}/api/users`)
      .then(response => {
        setUsers(response.data);
        if (response.data.length > 0) {
          setSelectedUser(response.data[0]._id);
        }
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  // --- 3. Update the useEffect hook to handle the confetti logic ---
  useEffect(() => {
    socket.on('leaderboardUpdate', (newLeaderboard) => {
      // Check if there's a new leader
      if (newLeaderboard.length > 0) {
        const newLeader = newLeaderboard[0];
        // If leaderId has been set and the new leader is different
        if (leaderId && newLeader._id !== leaderId) {
          setShowConfetti(true); // Trigger the confetti!
        }
        // Update the current leader ID
        setLeaderId(newLeader._id);
      }
      setLeaderboard(newLeaderboard);
    });

    return () => socket.off('leaderboardUpdate');
  }, [leaderId]); // Add leaderId as a dependency

  const handleClaimPoints = () => {
    if (!selectedUser) return;
    axios.post(`${API_URL}/api/claim`, { userId: selectedUser })
      .catch(error => console.error("Error claiming points:", error));
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    if (!newUserName.trim()) return;
    axios.post(`${API_URL}/api/users`, { name: newUserName })
      .then(response => {
        setUsers([...users, response.data]);
        setNewUserName('');
      })
      .catch(error => alert('Error adding user. Name might already exist.'));
  };

  const topThree = leaderboard.slice(0, 3);
  const restOfLeaderboard = leaderboard.slice(3);

  const getPodiumClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return '';
  };

  return (
    <div className="app-container">
      {/* --- 4. Render the Confetti component when showConfetti is true --- */}
      {showConfetti && (
        <ReactConfetti
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
          onConfettiComplete={() => setShowConfetti(false)}
        />
      )}

      <header className="app-header">
        <h1>Party Ranking</h1>
      </header>

      <div className="controls-container">
        <div className="control-card">
          <h3>Claim Points</h3>
          <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
            {users.map((user) => (
              <option key={user._id} value={user._id}>{user.name}</option>
            ))}
          </select>
          <button onClick={handleClaimPoints}>Claim Points</button>
        </div>
        <div className="control-card">
          <h3>Add New User</h3>
          <form onSubmit={handleAddUser}>
            <input
              type="text"
              value={newUserName}
              onChange={(e) => setNewUserName(e.target.value)}
              placeholder="Enter new user name"
            />
            <button type="submit">Add User</button>
          </form>
        </div>
      </div>

      <main className="leaderboard-container">
        {topThree.length > 0 && (
          <div className="podium">
            {[topThree.find(u => u.rank === 2), topThree.find(u => u.rank === 1), topThree.find(u => u.rank === 3)]
              .map(user => user && (
                <div key={user._id} className={`podium-item ${getPodiumClass(user.rank)}`}>
                  {user.rank === 1 && <FontAwesomeIcon icon={faCrown} className="crown-icon" />}
                  <div className="avatar-container">
                    <img
                      src={`https://i.pravatar.cc/150?u=${user._id}`}
                      alt={user.name}
                      className="podium-avatar"
                    />
                    <div className="rank-badge">{user.rank}</div>
                  </div>
                  <p className="podium-name">{user.name}</p>
                  <p className="podium-points">
                    <span>🏅</span>{user.totalPoints.toLocaleString()}
                  </p>
                </div>
              ))}
          </div>
        )}

        <ul className="leaderboard-list">
          {restOfLeaderboard.map((user) => (
            <li key={user._id} className="list-item">
              <span className="list-rank">{user.rank}</span>
              <img
                src={`https://i.pravatar.cc/100?u=${user._id}`}
                alt={user.name}
                className="list-avatar"
              />
              <span className="list-name">{user.name}</span>
              <span className="list-points">{user.totalPoints.toLocaleString()} 🏆</span>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;