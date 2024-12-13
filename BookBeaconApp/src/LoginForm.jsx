import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="w-screen h-screen bg-violet-200 flex items-center justify-center">
      <div className="max-w-lg mx-auto bg-violet-300 text-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center space-x-4 mb-6">
          <button 
            className={`px-4 py-2 rounded-full ${isLogin ? 'bg-white text-violet-900' : 'bg-violet-800'}`} 
            onClick={() => setIsLogin(true)}>
            Login
          </button>
          <button 
            className={`px-4 py-2 rounded-full ${!isLogin ? 'bg-white text-violet-900' : 'bg-violet-800'}`} 
            onClick={() => setIsLogin(false)}>
            SignUp
          </button>
        </div>

        {isLogin ? (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-violet-900">Login Form</h2>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 rounded-md bg-violet-700 text-violet-100" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 rounded-md bg-violet-700 text-violet-100" 
            />
            <div className="flex justify-between items-center">
              <Link to="/forgot-password" className="text-sm text-violet-700 hover:underline font-semibold">Forgot Password?</Link>
              <button className="bg-violet-600 hover:bg-violet-500 text-white p-2 rounded-md">Login</button>
            </div>
            <p className="text-sm mt-4 text-violet-900">Not a Member? 
              <a href="#" onClick={() => setIsLogin(false)} className="text-blue-700 hover:underline">Signup now</a>
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-violet-900">Signup Form</h2>
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full p-2 rounded-md bg-violet-700 text-white" 
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full p-2 rounded-md bg-violet-700 text-white" 
            />
            <input 
              type="password" 
              placeholder="Confirm Password" 
              className="w-full p-2 rounded-md bg-violet-700 text-white" 
            />
            <button className="bg-violet-600 px-4 py-2 rounded-full hover:bg-violet-500 text-white w-1/4 ml-72">SignUp</button>
          </div>
        )}
      </div>
    </div>
  );
}

