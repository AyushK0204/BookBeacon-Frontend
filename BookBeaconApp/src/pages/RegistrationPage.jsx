import React, { useState } from 'react';

const RegistrationPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen w-screen bg-violet-200 py-10 pl-20">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-5xl font-bold text-violet-800 mb-6 animate-pulse text-center">Register for Event</h1>
        <form action="https://formspree.io/f/mvgoodeo" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">Name:</label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2">Email:</label>
            <input
              className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <button type="submit" className="bg-violet-900 text-white py-2 px-4 rounded hover:bg-violet-400 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
