import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL
})


axiosInstance.interceptors.response.use(
    response=>{
        return response
    },
    error=>{
        if (error.response && error.response.status === 401) {
            localStorage.clear();
        }
        // Return a rejected promise for other errors
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('authToken');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

export default axiosInstance;
