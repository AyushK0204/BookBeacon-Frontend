import React, { useState } from 'react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/auth/forgot-password', { email });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-violet-200 p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-violet-900 mb-6">Forgot Password</h2>
        <form onSubmit={handleForgotPassword} className="space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border-2 border-violet-500 rounded-md focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
          <button
            type="submit"
            className="w-1/2 ml-20 py-3 bg-violet-600 text-white rounded-md hover:bg-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Submit
          </button>
        </form>
        {message && <p className="mt-4 text-center text-sm text-violet-700">{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPassword;
