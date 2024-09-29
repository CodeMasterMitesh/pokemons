import react, { useState, useEffect, useContext, createContext } from 'react'

const AuthContext = createContext();
export const AuthProvider = ({ children }) => {

    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsAuthenticated(!!token);
        setLoading(false); 
    }, [])

    const login = (token) => {
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
    // Custom hook to use auth context

}
export const useAuth = () => {
    return useContext(AuthContext);
};
