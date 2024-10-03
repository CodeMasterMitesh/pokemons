import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Header from './Header';
import GoldSiverHeader from './view/HomePage/GoldSiverHeader';
const ProtectedRoute = ({ children }) => {
  useProtectedRoute();

  return <>
    <div>
        <Header />
        <div className='child'>
          <Outlet />
        </div>
    </div>
  </>;
};


const useProtectedRoute = () => {
  const { isAuthenticated, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      navigate('/login'); // Redirect to login if not authenticated
    }
  }, [isAuthenticated, loading, navigate]);
};

export default ProtectedRoute;
