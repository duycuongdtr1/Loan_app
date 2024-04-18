import React, { useState } from 'react';
import './App.css';
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import About from './Pages/About'; 
import Condition from './Pages/Condition'; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Admin from './Pages/Admin';
import Login from './Pages/Login';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  const [userType, setUserType] = useState(null);

  const handleLogin = (type) => {
    setUserType(type);
  };

  return (
    <div className="App">
      <ToastContainer></ToastContainer>
      <Router>
        <Navbar />
        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/Điều khoản" element={<Condition />} /> 
            <Route
              path="/login"
              element={<Login userType={userType} onLogin={handleLogin} />}
            />
          </Routes>
        </div>
        <div className="text-center mt-5">
          {userType && <Link to="/login" className="btn btn-primary mx-2">Đăng nhập</Link>}
          {userType === 'user' && <Link to="/" className="btn btn-primary mx-2">Cho Vay</Link>}
          {userType === 'admin' && <Link to="/admin" className="btn btn-primary mx-2">Trang Admin</Link>}
        </div>
      </Router>
    </div>
  );
}

export default App;
