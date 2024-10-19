import "./App.css";

import { CartProvider } from './pages/CartContext';

// router imports

import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from "./pages/Books";
import Logout from "./pages/Logout";
import Return from "./pages/Return";
import Issue_Book from "./pages/Issue_Book";
import Events from "./pages/Events";
import Admin from "./pages/Admin";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Sidebar from "./components/Sidebar";
import MyCart from './pages/MyCart'


function App() {
  return (
   
   
   <CartProvider>
      <Router>
        <Sidebar>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/books" element={<Books />} />
            <Route path="/issue_book" element={<Issue_Book />} />
            <Route path="/events" element={<Events />} />
            <Route path="/help" element={<Help />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/return" element={<Return />} />
            <Route path="/" element={<Home />} />
            <Route path="/mycart" element={<MyCart />} />
            <Route path="/" element={<Events />} /> 
            <Route path="/register/:eventId" element={<RegistrationPage />} />
          </Routes>
        </Sidebar>
      </Router>
      

     
      </CartProvider>
  );
}

export default App;