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
            path: '/register',   // /test route
            element: <RegisterComponent />
        },
        {
            path: '/forgot-password',   // /test route
            element: <ForgotPassword />
        },
        {
            path: '/',   // /test route
            element: <ProtectedRoute />,
            children:[
                {
                    path: '/home',   // /test route
                    element: <Home />
                },
                {
                    path: '/',   // /test route
                    element: <SubLayout />,
                    children:[
                        {
                            path: '/battle',   // /test route
                            element: <Battle />
                        },
                        {
                            path: '/packages',   // /test route
                            element: <Packages />,
                            children:[
                                
                            ]
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
