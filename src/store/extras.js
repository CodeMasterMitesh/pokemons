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

        if (response.data?.message) {
            response.data.success = false
            toast.warn(response.data?.message)
        }
        return response.data

    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

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
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

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
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
});

export const fishing = createAsyncThunk('other/fishing', async (data, { rejectWithValue }) => {
    try {

        const response = await toast.promise(
            axios({
                url: API_ENDPOINTS.START_FISHING,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    road: 1
                },
            }),
            {
                pending: i18n.t('Loading...'),
                success: {
                    render({ data }) {
                        return data?.message  || i18n.t('Success!');
                    }
                },
                error: {
                    render({ data }) {
                        return (data?.response?.data?.message || data?.response?.data?.error) || i18n.t('failed!');
                    }
                }
            }
        )
        return response.data

    } catch (error) {
        // toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

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
                state.user_badges = action.payload?.regions ? action.payload.regions : []
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
                state.best_fisher_of_yesterday = action.payload.bestFishrMan ? action.payload.bestFishrMan : []
            })
            .addCase(getBestFisherManOfYesterday.rejected, (state, action) => {
                state.best_fisher_of_yesterday_loading = false;
                state.best_fisher_of_yesterday_error = action.payload;
            })
            .addCase(fishing.pending, (state, action) => {
                state.fishing_loading = true;
                state.fishing_error = null;
            })
            .addCase(fishing.fulfilled, (state, action) => {
                state.fishing_loading = false;
                state.fishing = action.payload.data ? action.payload.data : []
            })
            .addCase(fishing.rejected, (state, action) => {
                state.fishing_loading = false;
                state.fishing_error = action.payload;
            })
    }
})

export default extrasSlice.reducer