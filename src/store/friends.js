import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";

export const getFriendRequest = createAsyncThunk('auth/getFriendRequest', async (_, { rejectWithValue }) => {
    
    return await axios({
        url: API_ENDPOINTS.GET_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});
export const getFriends = createAsyncThunk('auth/getFriends', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.GET_FRIENDS,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});
export const sendFriendRequest = createAsyncThunk('auth/sendFriendRequest', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.SEND_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});
export const acceptFriendRequest = createAsyncThunk('auth/acceptFriendRequest', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.ACCEPT_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});
export const declineFriendRequest = createAsyncThunk('auth/declineFriendRequest', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.DECLINE_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});
export const blockFriend = createAsyncThunk('auth/blockFriend', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.BLOCK_FRIEND,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => response.data)
    .catch(error => {
        return rejectWithValue(error.response.data);
    });
});



const initialState = {
    friends:[],
    friend_requests:[]
};
export const friendSlicer = createSlice({
    name: 'friend',
    initialState,
    reducers: {
    },
    extraReducers:(bulider)=>{
        bulider
        .addCase(getFriends.pending, (state) => {
            state.friends_loading = true;
            state.error = null;
        })
        .addCase(getFriends.fulfilled, (state, action) => {
            state.friends_loading = false;
            state.friends_error = action.payload;
            
        })
        .addCase(getFriends.rejected, (state, action) => {
            state.friends_loading = false;
            state.friends_error = action.payload;
        })
        .addCase(getFriendRequest.pending, (state) => {
            state.friend_requests_loading = true;
            state.users_error = null;
        })
        .addCase(getFriendRequest.fulfilled, (state, action) => {
            state.friend_requests_loading = false;
            state.friend_requests = action.payload;
        })
        .addCase(getFriendRequest.rejected, (state, action) => {
            state.friend_requests_loading = false;
            state.users_error = action.payload;
        })
        .addCase(sendFriendRequest.pending, (state) => {
            state.send_friend_requests_loading = true;
            state.friend_requests_error = null;
        })
        .addCase(sendFriendRequest.fulfilled, (state, action) => {
            state.send_friend_requests_loading = false;
            state.friend_requests = action.payload;
        })
        .addCase(sendFriendRequest.rejected, (state, action) => {
            state.send_friend_requests_loading = false;
            state.friend_requests_error = action.payload;
        })
        .addCase(acceptFriendRequest.pending, (state) => {
            state.accept_friend_requests_loading = true;
            state.accept_friend_requests_error = null;
        })
        .addCase(acceptFriendRequest.fulfilled, (state, action) => {
            state.accept_friend_requests_loading = false;
            state.friend_requests = action.payload;
        })
        .addCase(acceptFriendRequest.rejected, (state, action) => {
            state.accept_friend_requests_loading = false;
            state.accept_friend_requests_error = action.payload;
        })
        .addCase(declineFriendRequest.pending, (state) => {
            state.decline_friend_requests_loading = true;
            state.decline_friend_requests_error = null;
        })
        .addCase(declineFriendRequest.fulfilled, (state, action) => {
            state.decline_friend_requests_loading = false;
            state.friend_requests = action.payload;
        })
        .addCase(declineFriendRequest.rejected, (state, action) => {
            state.decline_friend_requests_loading = false;
            state.decline_friend_requests_error = action.payload;
        })
        .addCase(blockFriend.pending, (state) => {
            state.block_friend_loading = true;
            state.block_friend_error = null;
        })
        .addCase(blockFriend.fulfilled, (state, action) => {
            state.block_friend_loading = false;
        })
        .addCase(blockFriend.rejected, (state, action) => {
            state.block_friend_loading = false;
            state.block_friend_error = action.payload;
        })
    }
})

export default friendSlicer.reducer