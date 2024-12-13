import './App.css';
import { CartProvider } from './pages/CartContext';
import { UserProvider } from './pages/UserContext'; 
import RegistrationPage from './pages/RegistrationPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Books from './pages/Books';
import Logout from './pages/Logout';
import Return from './pages/Return';
import Issue_Book from './pages/Issue_Book';
import Events from './pages/Events';
import Admin from './pages/Admin';
import Help from './pages/Help';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Sidebar from './components/Sidebar';
import MyCart from './pages/MyCart';
import LoginForm from './LoginForm';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';
import BookDetails from './pages/BookDetails';

function App() {
  return (
    <UserProvider> 
      <CartProvider>
        <Router>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<LoginForm />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/books" element={<Books />} />
              <Route path="/book/:id" element={<BookDetails />} />
              <Route path="/issue_book" element={<Issue_Book />} />
              <Route path="/events" element={<Events />} />
              <Route path="/help" element={<Help />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/return" element={<Return />} />
              <Route path="/mycart" element={<MyCart />} />
              <Route path="/register/:eventId" element={<RegistrationPage />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password/:token" element={<ResetPassword />} />
            </Routes>
          </Sidebar>
        </Router>
      </CartProvider>
    </UserProvider>
  );
}

export default App;