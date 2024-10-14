import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";

const initialState = {
    pokemons: [],
    characters: [],
    player_pokemons: []
};

export const getPokemons = createAsyncThunk('auth/getPokemons', async (_, { rejectWithValue }) => {
    return axios({
        url: `${API_ENDPOINTS.POKEMONS}`,
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
export const getPlayerPokemons = createAsyncThunk('auth/getPlayerPokemons', async (_, { rejectWithValue }) => {
    try {

        return axios({
            url: `${API_ENDPOINTS.PLAYER_POKEMONS}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.data)
            .catch(error => {
                // return rejectWithValue(error.response.data);
            });
    }

    catch (error) {

    }
});

export const getCharacters = createAsyncThunk('auth/getCharacters', async (userCredentials, { rejectWithValue }) => {

    return await axios({
        url: API_ENDPOINTS.GET_CHARACTERS,
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

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPokemons.pending, (state) => {
                state.pokemons_loading = true;
                state.pokemons_error = null;
            })
            .addCase(getPokemons.fulfilled, (state, action) => {
                state.pokemons_loading = false;
                state.pokemons = action.payload?.available_pokes;
            })
            .addCase(getPokemons.rejected, (state, action) => {
                state.pokemons_loading = false;
                state.pokemons_error = action.payload;
            })
            .addCase(getCharacters.pending, (state) => {
                state.characters_loading = true;
                state.error = null;
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                state.characters_loading = false;
                state.characters = action.payload;
            })
            .addCase(getCharacters.rejected, (state, action) => {
                state.characters_loading = false;
                state.characters_error = action.payload;
            })
            .addCase(getPlayerPokemons.pending, (state) => {
                state.player_pokemons_loading = true;
                state.player_pokemons_error = null;
            })
            .addCase(getPlayerPokemons.fulfilled, (state, action) => {
                state.player_pokemons_loading = false;
                state.player_pokemons = action.payload;
            })
            .addCase(getPlayerPokemons.rejected, (state, action) => {
                state.player_pokemons_loading = false;
                state.player_pokemons_error = action.payload;
            });
    }
});

export default pokemonSlice.reducer;
