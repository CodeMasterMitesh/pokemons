import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";

export const getChat = createAsyncThunk('chat/getChat',async (_,{rejectWithValue})=>{
    return  axios({
        url: `${API_ENDPOINTS.GET_CHAT}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const getMailList = createAsyncThunk('chat/getMailList',async (_,{rejectWithValue})=>{
    return  axios({
        url: `${API_ENDPOINTS.GET_MAIL_LIST}`,
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});

export const sendChat = createAsyncThunk('chat/sendChat',async (data,{rejectWithValue})=>{
    return  axios({
        url: `${API_ENDPOINTS.SEND_CHAT}`,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data:data
        
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});


const initialState={
    all_chat:[],
    mail_list:[]
}
export const chartSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getChat.pending,(state,action)=>{
            state.all_chat_loading = true;
            state.all_chat_error = null;
        })
        .addCase(getChat.fulfilled, (state, action) => {
            state.all_chat_loading = false;
            state.all_chat = action.payload
        })
        .addCase(getChat.rejected, (state, action) => {
            state.all_chat_loading = false;
            state.all_chat_error = action.payload;
        })
        .addCase(sendChat.pending,(state,action)=>{
            state.send_chat_loading = true;
            state.send_chat_error = null;
        })
        .addCase(sendChat.fulfilled, (state, action) => {
            state.send_chat_loading = false;
            // state.all_chat = action.payload
        })
        .addCase(sendChat.rejected, (state, action) => {
            state.send_chat_loading = false;
            state.send_chat_error = action.payload;
        })
        .addCase(getMailList.pending,(state,action)=>{
            state.mail_loading = true;
            state.mail_error = null;
        })
        .addCase(getMailList.fulfilled, (state, action) => {
            state.mail_loading = false;
            state.mail_list = action.payload
        })
        .addCase(getMailList.rejected, (state, action) => {
            state.mail_loading = false;
            state.mail_error = action.payload;
        })


    }
})

export default chartSlice.reducer