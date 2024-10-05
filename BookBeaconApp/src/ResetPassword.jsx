import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './App.css';

const ResetPassword = () => {
  const { token } = useParams(); // Capture token from the URL
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('/api/auth/reset-password', {
        token,  // Pass the token from the URL
        password,
      });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleResetPassword}>
        <input
          type="password"
          placeholder="Enter new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ResetPassword;
