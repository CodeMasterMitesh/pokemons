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
        // rejectWithValue(error.response.data)
    }
});
export const getBestFisherManOfDay = createAsyncThunk('other/getBestFisherManOfDay', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.BEST_FISHER_OF_THE_DAY}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        // rejectWithValue(error.response.data)
    }
});
export const getBestFisherManOfYesterday = createAsyncThunk('other/getBestFisherManOfYesterday', async (_, { rejectWithValue }) => {
    try {

        const response = await axios({
            url: `${API_ENDPOINTS.BEST_FISHER_OF_THE_YESTERDAY}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        return response.data

    } catch (error) {
        // rejectWithValue(error.response.data)
    }
});

const initialState = {
    user_badges: [],
}

export const extrasSlice = createSlice({
    name: 'extras',
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
            .addCase(getBestFisherManOfDay.pending, (state, action) => {
                state.best_fisher_of_the_day_loading = true;
                state.best_fisher_of_the_day_error = null;
            })
            .addCase(getBestFisherManOfDay.fulfilled, (state, action) => {
                state.best_fisher_of_the_day_loading = false;
                state.best_fisher_of_the_day = action.payload.bestFisherManOfDay ? action.payload.bestFisherManOfDay : []
            })
            .addCase(getBestFisherManOfDay.rejected, (state, action) => {
                state.best_fisher_of_the_day_loading = false;
                state.best_fisher_of_the_day_error = action.payload;
            })
            .addCase(getBestFisherManOfYesterday.pending, (state, action) => {
                state.best_fisher_of_yesterday_loading = true;
                state.best_fisher_of_yesterday_error = null;
            })
            .addCase(getBestFisherManOfYesterday.fulfilled, (state, action) => {
                state.best_fisher_of_yesterday_loading = false;
                state.best_fisher_of_yesterday = action.payload.data ? action.payload.data : []
            })
            .addCase(getBestFisherManOfYesterday.rejected, (state, action) => {
                state.best_fisher_of_yesterday_loading = false;
                state.best_fisher_of_yesterday_error = action.payload;
            })
    }
})

export default extrasSlice.reducer