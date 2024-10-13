import React, { useEffect } from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { getProfile } from './store/auth';
const ProtectedRoute = ({ children }) => {
  useProtectedRoute();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProfile)
  },[])
  return <>
    <div className='h-100'>
        {/* <Header /> */}
        <div className='child'>
          <Outlet />
        </div>
        {/* <Footer/> */}
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
