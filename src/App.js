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


function App() {
    return (
      <>
      <Language/>
      <Router>
        <Routes>
            <Route path="/" element={<MainComponent />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/register" element={<RegisterComponent />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
      <ToastContainer />
      </>
    );
}

export default App;