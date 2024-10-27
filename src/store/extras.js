import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from "react-toastify";
import i18n from "i18next";  // Importing i18n for translations


export const getUserBadge = createAsyncThunk('other/getUserBadge', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.USER_BADGE}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        rejectWithValue(error.response.data)
    }
});

const initialState = {
    user_badges: [],
}

export const extraSlice = createSlice({
    name: 'extra',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getUserBadge.pending, (state, action) => {
                state.user_badges_loading = true;
                state.user_badges_error = null;
            })
            .addCase(getUserBadge.fulfilled, (state, action) => {
                state.user_badges_loading = false;
                state.user_badges = action.payload.data ? action.payload.data : []
            })
            .addCase(getUserBadge.rejected, (state, action) => {
                state.user_badges_loading = false;
                state.user_badges_error = action.payload;
            })
    }
})

export default extraSlice.reducer