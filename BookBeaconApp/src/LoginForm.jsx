import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="container" style={{ padding: '20px', textAlign: 'center' }}>
      <div className="Form-container">
        <div className="form-toggle">
          <button className={isLogin ? 'active' : ''} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? 'active' : ''} onClick={() => setIsLogin(false)}>SignUp</button>
        </div>

        {isLogin ? (
          <div className='form'>
            <h2>Login Form</h2>
            <input type='email' placeholder='Email' style={{ display: 'block', margin: '10px auto' }} />
            <input type='password' placeholder='Password' style={{ display: 'block', margin: '10px auto' }} />
            <Link to="/forgot-password">Forgot Password?</Link>
            <button>Login</button>
            <p>Not a Member? <a href="#" onClick={() => setIsLogin(false)}>Signup now</a></p>
          </div>
        ) : (
          <div className='form'>
            <h2>Signup Form</h2>
            <input type='email' placeholder='Email' style={{ display: 'block', margin: '10px auto' }} />
            <input type='password' placeholder='Password' style={{ display: 'block', margin: '10px auto' }} />
            <input type='password' placeholder='Confirm Password' style={{ display: 'block', margin: '10px auto' }} />
            <button>SignUp</button>
          </div>
        )}
      </div>
    </div>
  );
}
