import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../api/axios';
import { API_ENDPOINTS } from "../api/endpoint";
import { toast } from 'react-toastify';
import i18n from "i18next";  // Importing i18n for translations
import { logDOM } from "@testing-library/react";

const initialState = {
    pokemons: [],
    characters: [],
    player_pokemons: [],
    pokemon: {},
    pokemons_by_player: []
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
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')


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
                toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')


                // return rejectWithValue(error.response.data);
            });
    }

    catch (error) {

    }
});
export const getPokemonsByPlayer = createAsyncThunk('auth/getPokemonsByPlayer', async (data, { rejectWithValue }) => {
    try {
        if (data) {

            return axios({
                url: `${API_ENDPOINTS.PLAYER_POKEMONS_BY_PLAYER}`,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    playerName: data
                }
            })
                .then(response => response.data)
                .catch(error => {
                    toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')
                });
        }
    }

    catch (error) {

    }
});
export const getPokemonProfileById = createAsyncThunk('auth/getPokemonProfileById', async (id, { rejectWithValue }) => {
    try {

        return axios({
            url: `${API_ENDPOINTS.POKEMON_BY_ID}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            params: {
                id: id
            }
        })
            .then(response => response.data)
            .catch(error => {
                toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')


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
            toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

            // return rejectWithValue(error.response.data);
        });
});
export const addPlayerPokemon = createAsyncThunk('auth/addPlayerPokemon', async (data, { rejectWithValue }) => {
    try {
        const response = await toast.promise(
            axios({
                url: API_ENDPOINTS.ADD_PLAYER_POKEMON,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    pokemon_id: data
                }
            }), {
            pending: i18n.t('Player updating...'),
            success: i18n.t('Player update!'),
            error: {
                render({ data }) {
                    return data?.response?.data?.message || i18n.t('failed!');
                }
            }
        }
        )
        return response.data
    } catch (error) {
        toast.error((error?.response?.data?.message || error?.response?.data?.error) || 'failed!')

    }
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
            .addCase(getPokemonProfileById.pending, (state) => {
                state.pokemon_loading = true;
                state.pokemon_error = null;
            })
            .addCase(getPokemonProfileById.fulfilled, (state, action) => {
                state.pokemon_loading = false;
                state.pokemon = action.payload?.data[0];
            })
            .addCase(getPokemonProfileById.rejected, (state, action) => {
                state.pokemon_loading = false;
                state.pokemon_error = action.payload;
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
            })
            .addCase(addPlayerPokemon.pending, (state) => {
                state.add_player_pokemons_loading = true;
                state.add_player_pokemons_error = null;
            })
            .addCase(addPlayerPokemon.fulfilled, (state, action) => {
                state.add_player_pokemons_loading = false;
            })
            .addCase(addPlayerPokemon.rejected, (state, action) => {
                state.add_player_pokemons_loading = false;
                state.add_player_pokemons_error = action.payload;
            })
            .addCase(getPokemonsByPlayer.fulfilled, (state, action) => {
                state.pokemons_by_player = action.payload;
            })
    }
});

export default pokemonSlice.reducer;
