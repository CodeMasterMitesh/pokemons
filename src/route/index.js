import MainComponent from '../view/MainComponent/MainComponent';
import LoginComponent from '../view/LoginComponent/LoginComponent';
import ForgotPassword from '../view/ForgotPassword/ForgotPassword';
import RegisterComponent from '../view/RegisterComponent/RegisterComponent';
import Home from '../view/HomePage/Home';
import ProtectedRoute from '../ProtectedRoute.js';
import Battle from '../view/HomePage/Battle';
import { useRoutes } from 'react-router-dom';
import MainLayout from '../layout/MainLayout';
import Packages from '../view/HomePage/Packages';
import SubLayout from '../layout/SubLayout';
import Settings from '../view/Settings/Settings';
import Notification from '../view/Settings/Notification';
import Character from '../view/Settings/Character';
import Profile from '../view/Settings/Profile';
import Create from '../view/Pages/Create';
import Fortune from '../view/Pages/Fortune';
import Hospital from '../view/Pages/Hospital';
import Modal from '../view/Pages/Modal';
import Pokebag from '../view/Pages/Pokebag';
import Pokedex from '../view/Pages/Pokedex';
import Pvp from '../view/Pages/Pvp';
import RaceInvite from '../view/Pages/RaceInvite';
import Select from '../view/Pages/Select';
import Steal from '../view/Pages/Steal';
import Town from '../view/Pages/Town';
import Works from '../view/Pages/Works';
import FriendRequest from '../view/Pages/FriendRequest';
import BlockList from '../view/Pages/BlockList';
import InBox from '../view/Pages/InBox';


const MainRoutes = {
    path: '/',
    element: <MainLayout />,  // MainLayout wraps all child components
    children: [
        {
            path: '/',    
            element: <MainComponent />
        },
        {
            path: '/login',    
            element: <LoginComponent />
        },
        {
            path: '/register', 
            element: <RegisterComponent />
        },
        {
            path: '/forgot-password', 
            element: <ForgotPassword />
        },
        {
            path: '/', 
            element: <ProtectedRoute />,
            children:[
                {
                    path: '/home', 
                    element: <Home />
                },
                {
                    path: '/', 
                    element: <SubLayout />,
                    children:[
                        {
                            path: '/battle', 
                            element: <Battle />
                        },
                        {
                            path: '/friend-requests', 
                            element: <FriendRequest />
                        },
                        {
                            path: '/block-list', 
                            element: <BlockList />
                        },
                        {
                            path: '/inbox', 
                            element: <InBox />
                        },
                        {
                            path: '/packages', 
                            element: <Packages />,
                        },
                        {
                            path: '/settings', 
                            element: <Settings />,
                        },
                        {
                            path: '/profile', 
                            element: <Profile />,
                        },
                        {
                            path: '/character', 
                            element: <Character />,
                        },
                        {
                            path: '/notification', 
                            element: <Notification />,
                        },
                        {
                            path: '/create', 
                            element: <Create />,
                        },
                        {
                            path: '/fortune',
                            element: <Fortune />,
                        },
                        {
                            path: '/hospital',
                            element: <Hospital />,
                        },
                        {
                            path: '/modal', 
                            element: <Modal />,
                        },
                        {
                            path: '/pokebag' ,
                            element: <Pokebag />,
                        },
                        {
                            path: '/pokedex', 
                            element: <Pokedex />,
                        },
                        {
                            path: '/pvp', 
                            element: <Pvp />,
                        },
                        {
                            path: '/raceInvite' ,
                            element: <RaceInvite />,
                        },
                        {
                            path: '/select' ,
                            element: <Select />,
                        },
                        {
                            path: '/steal', 
                            element: <Steal />,
                        },
                        {
                            path: '/town',
                            element: <Town />,
                        },
                        {
                            path: '/works', 
                            element: <Works />,
                        },
                    ]
                },
            ]
        },
    ]
};

export default function ThemeRoutes() {
    return useRoutes([MainRoutes]);
};
