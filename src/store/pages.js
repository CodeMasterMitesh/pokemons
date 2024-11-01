import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from "react-toastify";
import i18n from "i18next";  // Importing i18n for translations


export const goldMarket = createAsyncThunk('other/goldMarket', async (data, { rejectWithValue }) => {
    try {

        const response = await toast.promise(
            axios({
                url: API_ENDPOINTS.GOLD_MARKET,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: data,
            }),
            {
                pending: i18n.t('Loading...'),
                success: i18n.t('successful!'),
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
    notifications: [],
    notification_count: 0,
    house_seller_data: []
}

export const pagesSlice = createSlice({
    name: 'pages',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(goldMarket.pending, (state, action) => {
                state.gold_market_loading = true;
                state.gold_market_error = null;
            })
            .addCase(goldMarket.fulfilled, (state, action) => {
                state.gold_market_loading = false;
                state.gold_market = action.payload?.data ? action.payload.data : []
            })
            .addCase(goldMarket.rejected, (state, action) => {
                state.gold_market_loading = false;
                state.gold_market_error = action.payload;
            })
    }
})

export default pagesSlice.reducer