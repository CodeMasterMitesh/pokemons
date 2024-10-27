import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from 'react-toastify';
import i18n from "i18next";

export const getFriendRequest = createAsyncThunk('auth/getFriendRequest', async (_, { rejectWithValue }) => {
    try {

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
    } catch (error) {

    }
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
export const getSearchPlayers = createAsyncThunk('auth/getSearchPlayers', async (data, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.GET_PLAYERS,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            player: data
        }
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const sendFriendRequest = createAsyncThunk('auth/sendFriendRequest', async (id, { rejectWithValue }) => {

    return toast.promise(
        axios({
            url: API_ENDPOINTS.SEND_FRIEND_REQUEST,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                user_id: id
            }
        }), {
        pending: i18n.t('Sending...'),
        success: i18n.t('Successfully sent !'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const acceptFriendRequest = createAsyncThunk('auth/acceptFriendRequest', async (data, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.ACCEPT_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const declineFriendRequest = createAsyncThunk('auth/declineFriendRequest', async (data, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.DECLINE_FRIEND_REQUEST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const blockFriend = createAsyncThunk('auth/blockFriend', async (data, { rejectWithValue }) => {

    return toast.promise(axios({
        url: API_ENDPOINTS.BLOCK_FRIEND,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            player:data
        }
    }), {
        pending: i18n.t('Blocking...'),
        success: i18n.t('Success!'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const removeFriend = createAsyncThunk('auth/removeFriend', async (data, { rejectWithValue }) => {

    return toast.promise(axios({
        url: API_ENDPOINTS.REMOVE_FRIEND,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params: {
            player:data
        }
    }), {
        pending: i18n.t('Blocking...'),
        success: i18n.t('Success!'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const unblockFriend = createAsyncThunk('auth/unblockFriend', async (data, { rejectWithValue }) => {

    // return await 
    return toast.promise(axios({
        url: API_ENDPOINTS.UNBLOCK_FRIEND,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        params:{
            player:data
        }
    }), {
        pending: i18n.t('Unblocking...'),
        success: i18n.t('Success!'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});
export const getBlockList = createAsyncThunk('auth/getBlockList', async (data, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.BLOCK_FRIEND_LIST,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        data: data
    })
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});



const initialState = {
    friends: [],
    friend_requests: [],
    block_friends: [],
    online_friend_count: 0,
    search_players: [],
    block_friend_list:[]
};
export const friendSlicer = createSlice({
    name: 'friend',
    initialState,
    reducers: {
    },
    extraReducers: (bulider) => {
        bulider
            .addCase(getFriends.pending, (state) => {
                state.friends_loading = true;
                state.error = null;
            })
            .addCase(getFriends.fulfilled, (state, action) => {
                state.friends_loading = false;
                state.friends = action.payload?.friends ?action.payload?.friends:[];
                state.online_friend_count = action.payload?.online_friends;
            })
            .addCase(getFriends.rejected, (state, action) => {
                state.friends_loading = false;
                state.friends_error = action.payload;
            })
            .addCase(getSearchPlayers.pending, (state) => {
                state.search_players_loading = true;
                state.search_error = null;
            })
            .addCase(getSearchPlayers.fulfilled, (state, action) => {
                state.search_players_loading = false;
                state.search_players = action.payload.data;
            })
            .addCase(getSearchPlayers.rejected, (state, action) => {
                state.search_players_loading = false;
                state.search_players_error = action.payload;
            })
            .addCase(getFriendRequest.pending, (state) => {
                state.friend_requests_loading = true;
                state.users_error = null;
            })
            .addCase(getFriendRequest.fulfilled, (state, action) => {
                state.friend_requests_loading = false;
                state.friend_requests = action.payload.friends?action.payload.friends:[];
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
                // state.friend_requests = action.payload;
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
                state.block_friends = action.payload
            })
            .addCase(blockFriend.rejected, (state, action) => {
                state.block_friend_loading = false;
                state.block_friend_error = action.payload;
            })
            .addCase(unblockFriend.pending, (state) => {
                state.unblock_friend_loading = true;
                state.unblock_friend_error = null;
            })
            .addCase(unblockFriend.fulfilled, (state, action) => {
                state.unblock_friend_loading = false;
            })
            .addCase(unblockFriend.rejected, (state, action) => {
                state.block_friend_loading = false;
                state.block_friend_error = action.payload;
            })
            .addCase(getBlockList.pending, (state) => {
                state.block_friend_list_loading = true;
                state.block_friend_list_error = null;
            })
            .addCase(getBlockList.fulfilled, (state, action) => {
                state.block_friend_list_loading = false;
                state.block_friend_list=action.payload.data?action.payload.data:[];
            })
            .addCase(getBlockList.rejected, (state, action) => {
                state.block_friend_list_loading = false;
                state.block_friend_list_error = action.payload;
            })
    }
})

export default friendSlicer.reducer