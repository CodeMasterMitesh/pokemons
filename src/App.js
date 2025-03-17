import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import MainComponent from './view/MainComponent/MainComponent';
// import LoginComponent from './view/LoginComponent/LoginComponent';
// import ForgotPassword from './view/ForgotPassword/ForgotPassword';
// import RegisterComponent from './view/RegisterComponent/RegisterComponent';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/battle.css';
import './assets/css/battleResponsive.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import 'react-tooltip/dist/react-tooltip.css'
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './contexts/AuthContext'; 
import Route from './route/index.js';


function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          {/* <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/home" element={<ProtectedRoute><Home/></ProtectedRoute>} />
            <Route path="/battle" element={<ProtectedRoute><Battle/></ProtectedRoute>} />
          </Routes> */}
        <Route/>
        </Router>
      </AuthProvider>
      <ToastContainer />
    </>
  );
}

export default App;