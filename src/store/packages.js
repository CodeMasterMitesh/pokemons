import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from "react-toastify";

const initialState = {
    packages: [],
    featuredPackages: [],
    userInvoice: []
};

export const getPackages = createAsyncThunk('auth/getPackages', async (_, { rejectWithValue, getState }) => {
    return axios({
        url: `${API_ENDPOINTS.PACKAGES}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

        });
});

export const getUserInvoice = createAsyncThunk('auth/getUserInvoice', async (_, { rejectWithValue, getState }) => {
    return axios({
        url: `${API_ENDPOINTS.USER_INVOICE}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

        });
});
export const getFeaturedPackages = createAsyncThunk('auth/getFeaturedPackages', async (_, { rejectWithValue, getState }) => {
    return axios({
        url: `${API_ENDPOINTS.FEATURED_PACKAGES}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

        });
});

export const authSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPackages.pending, (state) => {
                state.packages_loading = true;
                state.packages_error = null;
            })
            .addCase(getPackages.fulfilled, (state, action) => {
                state.packages_loading = false;
                state.packages = action.payload;
            })
            .addCase(getPackages.rejected, (state, action) => {
                state.packages_loading = false;
                state.packages_error = action.payload;
            })
            .addCase(getFeaturedPackages.pending, (state) => {
                state.featuredPackages_loading = true;
                state.featuredPackages_error = null;
            })
            .addCase(getFeaturedPackages.fulfilled, (state, action) => {
                state.featuredPackages_loading = false;
                state.featuredPackages = action.payload;
            })
            .addCase(getFeaturedPackages.rejected, (state, action) => {
                state.featuredPackages_loading = false;
                state.featuredPackages_error = action.payload;
            })
            .addCase(getUserInvoice.pending, (state) => {
                state.userInvoice_loading = true;
                state.userInvoice_error = null;
            })
            .addCase(getUserInvoice.fulfilled, (state, action) => {
                state.userInvoice_loading = false;
                state.userInvoice = action.payload;
            })
            .addCase(getUserInvoice.rejected, (state, action) => {
                state.userInvoice_loading = false;
                state.userInvoice_error = action.payload;
            })
    }
});

export default authSlice.reducer;
