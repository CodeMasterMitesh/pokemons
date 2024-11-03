import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from 'react-toastify';
import i18n from "i18next";  // Importing i18n for translations


export const changePersonalData = createAsyncThunk('auth/changePersonalData', async (data, { rejectWithValue }) => {
    return toast.promise(
        axios({
            url: API_ENDPOINTS.CHANGE_PERSONAL_DATA,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data
        }),
        {
            pending: i18n.t('Updating...'),
            success: i18n.t('Successful!'),
            error: {
                render({ data }) {
                    return (data?.response?.data?.message ||data?.response?.data?.error) || i18n.t('Failed!');

                }
            }
        }
    )
        .then(response => {
            return response.data
        })
});

export const updatePassword = createAsyncThunk('auth/updatePassword', async (data, { rejectWithValue }) => {
    return toast.promise(
        axios({
            url: API_ENDPOINTS.UPDATE_PASSWORD,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data
        }),
        {
            pending: i18n.t('Updating...'),
            success: i18n.t('Successful!'),
            error: {
                render({ data }) {
                    return (data?.response?.data?.message ||data?.response?.data?.error) || i18n.t('Failed!');
                }
            }
        }
    )
        .then(response => {
            return response.data
        })
});

export const updateEmail = createAsyncThunk('auth/updateEmail', async (data, { rejectWithValue }) => {
    return toast.promise(
        axios({
            url: API_ENDPOINTS.UPDATE_EMAIL,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data
        }),
        {
            pending: i18n.t('Updating...'),
            success: i18n.t('Successful!'),
            error: {
                render({ data }) {
                    return (data?.response?.data?.message ||data?.response?.data?.error) || i18n.t('Failed!');
                }
            }
        }
    )
        .then(response => {
            return response.data
        })
});

const initialState = {
};
export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(changePersonalData.pending, (state) => {
                state.change_data_loading = true;
                state.change_data_error = null;
            })
            .addCase(changePersonalData.fulfilled, (state, action) => {
                state.change_data_loading = false;
                state.user_data = action.payload
            })
            .addCase(changePersonalData.rejected, (state, action) => {
                state.change_data_loading = false;
                state.change_data_error = action.payload;
            })
    }
});

export default settingsSlice.reducer;
