import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from 'react-toastify';
import i18n from "i18next";  // Importing i18n for translations


export const loginUser = createAsyncThunk('auth/loginUser', async (userCredentials, { rejectWithValue }) => {
    return toast.promise(
        axios({
            url: API_ENDPOINTS.LOGIN,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: userCredentials,
        }),
        {
            pending: i18n.t('Logging in...'),
            success: i18n.t('Login successful!'),
            error: {
                render({ data }) {
                    return data?.response?.data?.message || i18n.t('Login failed!');
                }
            }
        }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});

export const registerUser = createAsyncThunk('auth/registerUser', async (userCredentials, { rejectWithValue }) => {
    return toast.promise(
        axios({
            url: API_ENDPOINTS.REGISTER,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: userCredentials,
        }), {
        pending: i18n.t('Registering...'),
        success: i18n.t('Registration successful!'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('Registration failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});

export const getUsers = createAsyncThunk('auth/getUsers', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.GET_USERS,
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


export const getPlayers = createAsyncThunk('auth/getPlayers', async (data, { rejectWithValue }) => {

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

export const updatePlayer = createAsyncThunk('auth/updatePlayer', async (data, { rejectWithValue }) => {

    return toast.promise(
        axios({
            url: API_ENDPOINTS.UPDATE_PLAYERS,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                player: data
            }
        }),{
            pending: i18n.t('Player updating...'),
            success: i18n.t('Player update!'),
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
export const forgotPassword = createAsyncThunk('auth/forgotPassword', async (userCredentials, { rejectWithValue }) => {

    return toast.promise(
        axios({
            url: API_ENDPOINTS.FORGOT_PASSWORD,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data: userCredentials,
        }), {
        pending: i18n.t('Sending Mail...'),
        success: i18n.t('Mail Sent!'),
        error: {
            render({ data }) {
                return data?.response?.data?.message || i18n.t('Send mail failed!');
            }
        }
    }
    )
        .then(response => response.data)
        .catch(error => {
            return rejectWithValue(error.response.data);
        });
});

export const getProfile = createAsyncThunk('auth/getProfile', async (_, { rejectWithValue, getState }) => {
    let user_data = JSON.parse(localStorage.getItem('userData'))
    return axios({
        url: `${API_ENDPOINTS.PLAYER_PROFILE}?player=${user_data?.playerName}`,
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

const initialState = {
    user_data: {},
    online_users: [],
    characters: [],
    players: [],
    online_user_count: 0
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.user_data = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.login_loading = true;
                state.login_error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.login_loading = false;
                state.user_data = action.payload?.user;
                if (action.payload?.token) {
                    localStorage.setItem('userData', JSON.stringify(action.payload.user))
                }
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.login_loading = false;
                state.login_error = action.payload;
            })
            .addCase(registerUser.pending, (state) => {
                state.register_loading = true;
                state.register_error = null;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.register_loading = false;
                // state.user_data = action.payload.data.user;

            })
            .addCase(registerUser.rejected, (state, action) => {
                state.register_loading = false;
                state.register_error = action.payload;
            })
            .addCase(forgotPassword.pending, (state) => {
                state.forgot_password_loading = true;
                state.error = null;
            })
            .addCase(forgotPassword.fulfilled, (state, action) => {
                state.forgot_password_loading = false;
                // state.user_data = action.payload;
            })
            .addCase(forgotPassword.rejected, (state, action) => {
                state.forgot_password_loading = false;
                state.forgot_password_error = action.payload;
            })
            .addCase(getProfile.pending, (state) => {
                state.profile_loading = true;
                state.error = null;
            })
            .addCase(getProfile.fulfilled, (state, action) => {
                state.profile_loading = false;
                state.user_data = action.payload?.data;

            })
            .addCase(getProfile.rejected, (state, action) => {
                state.profile_loading = false;
                state.profile_error = action.payload;
            })
            .addCase(getUsers.pending, (state) => {
                state.online_users_loading = true;
                state.error = null;
            })
            .addCase(getUsers.fulfilled, (state, action) => {
                state.online_users_loading = false;
                state.online_users = action.payload?.online_users;
                state.online_user_count = action.payload?.online_count;
            })
            .addCase(getUsers.rejected, (state, action) => {
                state.online_users_loading = false;
                state.online_users_error = action.payload;
            })
            .addCase(getPlayers.pending, (state) => {
                state.players_loading = true;
                state.error = null;
            })
            .addCase(getPlayers.fulfilled, (state, action) => {
                state.players_loading = false;
                state.players = action.payload;

            })
            .addCase(getPlayers.rejected, (state, action) => {
                state.players_loading = false;
                state.players_error = action.payload;
            })
            .addCase(updatePlayer.pending, (state) => {
                state.players_loading = true;
                state.error = null;
            })
            .addCase(updatePlayer.fulfilled, (state, action) => {
                state.players_loading = false;
            })
            .addCase(updatePlayer.rejected, (state, action) => {
                state.players_loading = false;
                state.players_error = action.payload;
            })


    }
});

export default authSlice.reducer;
