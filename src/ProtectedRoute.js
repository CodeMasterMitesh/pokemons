import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import Header from './Header';
import Footer from './Footer';
import { useDispatch } from 'react-redux';
import { getProfile } from './store/auth';
import { getDualByTrainerId } from 'store/friends';
const ProtectedRoute = ({ children }) => {

  useProtectedRoute();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const getDualData = async () => {
    const location=window.location.pathname
    let userData = localStorage.getItem('userData');
    if (userData) {
      userData = JSON.parse(userData)
      let payload = {
        trainer_id: userData?.playerId,
      }

      let data = await dispatch(getDualByTrainerId(payload)).unwrap();
      if (data && data?.duel_data && data?.duel_data?.id) {
        let challanged = userData?.playerName == data?.duel_data?.uitdager
        if (data?.duel_data?.status == 'wait' && !location.includes('challange-request')) {
          navigate(`/challange-request?challanged=${challanged || false}&&duel=${data?.duel_data?.id}`)
        } else if (data?.duel_data?.status == 'accept' && !location.includes('battle')) {
          navigate(`/battle?challanged=${challanged || false}&&duel=${data?.duel_data?.id}`)
        }
      } else if (location.includes('challange-request') || location.includes('battle')) {
        navigate(`/home`)
      }
    }
  }
  useEffect(() => {
    dispatch(getProfile)
    getDualData();
    setInterval(() => { getDualData() }, 10 * 1000)
  }, [])
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
