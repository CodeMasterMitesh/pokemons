import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_ENDPOINTS } from "api/endpoint";
import axios from '../api/axios';
import { toast } from "react-toastify";

export const getAttcklist = createAsyncThunk('battle/getAttcklist', async (data) => {
    return axios({
        url: `${API_ENDPOINTS.GET_ATTACK_LIST}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')
        });
})
export const doAttck = createAsyncThunk('battle/doAttck', async (data) => {
    return axios({
        url: `${API_ENDPOINTS.DO_ATTACK}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')
        });
})
export const getAttckLogs = createAsyncThunk('battle/getAttckLogs', async (data) => {
    return axios({
        url: `${API_ENDPOINTS.GET_ATTACK_LOGS}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')
        });
})

const battleSlice = createSlice({
    name: 'battle',
    initialState: {
        attacklist: [],
        fugirList: [],
        mochilsList: [],
        attackLogs: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAttcklist.fulfilled, (state, action) => {
                state.attacklist = action.payload
            })
            .addCase(getAttckLogs.fulfilled, (state, action) => {
                state.attackLogs = action.payload
            })
    }
})

export default battleSlice.reducer;
