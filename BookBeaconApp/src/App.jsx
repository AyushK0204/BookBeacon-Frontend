import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginForm from './LoginForm'
import ForgotPassword from './ForgotPassword'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}

export default App
