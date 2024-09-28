import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios'; 
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from 'react-toastify';

const initialState={
    user_data: {},
    loading: false,
    error: null,
}

export const loginUser =createAsyncThunk('auth/loginUser',async(userCredentials, { rejectWithValue })=>{
        return toast.promise(
            axios({
                url: API_ENDPOINTS.LOGIN,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userCredentials,
            }),
            {
                pending: 'Logging in...',
                success: 'Login successful!',
                error: {
                    render({ data }) {
                        return data?.response?.data?.message || 'Login failed!';
                    }
                }
            }
        ).then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
})
export const registerUser =createAsyncThunk('auth/registerUser',async(userCredentials, { rejectWithValue })=>{
        return toast.promise(
            axios({
                url: API_ENDPOINTS.REGISTER,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: userCredentials, 
            }),{
                pending: 'Registering...',
                success: 'Registration successful!',
                error: {
                    render({ data }) {
                        return data?.response?.data?.message || 'Registration failed!';
                    }
                }
            }
        ).then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        })
})


export const forgotPassword =createAsyncThunk('auth/forgot-password',async(userCredentials, { rejectWithValue })=>{
    return toast.promise(
        axios({
            url: API_ENDPOINTS.FORGOT_PASSWORD,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: userCredentials, 
        }),{
            pending: 'Sending Mail...',
            success: 'Mail Sent!',
            error: {
                render({ data }) {
                    return data?.response?.data?.message || 'Send mail failed!';
                }
            }
        }
    ).then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    })
})


export const  authSlice = createSlice({

    name:'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user_data = {};
        },
    },
    extraReducers:(builder)=>{
        builder
        .addCase(loginUser.pending,(state)=>{
            state.login_loading=true;
            state.login_error=null;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
            state.login_loading = false;
            state.user_data = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
            state.login_loading = false;
            state.login_error = action.payload;
        })
        .addCase(registerUser.pending,(state)=>{
            state.register_loading=true;
            state.register_error=null;
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.register_loading = false;
            state.user_data = action.payload;
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.register_loading = false;
            state.register_error = action.payload;
        })
        .addCase(forgotPassword.pending,(state)=>{
            state.forgot_password_loading=true;
            state.error=null;
        })
        .addCase(forgotPassword.fulfilled, (state, action) => {
            state.forgot_password_loading = false;
            state.user_data = action.payload;
        })
        .addCase(forgotPassword.rejected, (state, action) => {
            state.loading = false;
            state.forgot_password_error = action.payload;
        });
    }
})

// export const { } = authSlice.actions;

export default authSlice.reducer;