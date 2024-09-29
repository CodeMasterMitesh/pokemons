import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainComponent from './view/MainComponent/MainComponent';
import LoginComponent from './view/LoginComponent/LoginComponent';
import ForgotPassword from './view/ForgotPassword/ForgotPassword';
import RegisterComponent from './view/RegisterComponent/RegisterComponent';
import Language from './Language';
import './assets/css/style.css';
import './assets/css/responsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Home from './view/HomePage/Home';

import { AuthProvider } from './contexts/AuthContext'; // Adjust the path as needed
import ProtectedRoute from './ProtectedRoute.js';


function App() {
  return (
    <>
      <Language />
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
          </Routes>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;