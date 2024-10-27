import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../api/axios";
import { API_ENDPOINTS } from "../api/endpoint";


export const pokemonJudge = createAsyncThunk('other/pokemonJudge', async (id, { rejectWithValue }) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINTS.POKEMON_JUDGE}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            data:{
                pokemonid:id
            }
        })
        return response.data

    } catch (error) {
        rejectWithValue(error.response.data)
    }
});

export const pokemonGuide = createAsyncThunk('other/pokemonGuide', async (data, { rejectWithValue }) => {
    try {
        const response = await axios({
            url: `${API_ENDPOINTS.POKEMON_GUID}`,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            params:data
        })
        return response.data

    } catch (error) {
        rejectWithValue(error.response.data)
    }
});

const initialState = {
    user_badges: [],
    pokemon_guide: {},
    pokemon_judge: {},
}

export const assistanceSlice = createSlice({
    name: 'assistance',
    initialState,
    reducers: {
        clearPokemonJudge(state) {
            state.pokemon_judge = {}; // Clear the pokemon_judge state
            state.pokemon_judge_loading = false; // Optional: Reset loading
            state.pokemon_judge_error = null; // Optional: Reset error
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(pokemonJudge.pending, (state, action) => {
                state.pokemon_judge = action.payload ? action.payload : {}
                state.pokemon_judge_loading = true;
                state.pokemon_judge_error = null;
            })
            .addCase(pokemonJudge.fulfilled, (state, action) => {
                state.pokemon_judge_loading = false;
                state.pokemon_judge = action.payload ? action.payload : {}
            })
            .addCase(pokemonJudge.rejected, (state, action) => {
                state.pokemon_judge_loading = false;
                state.pokemon_judge_error = action.payload;
            })
            
            .addCase(pokemonGuide.pending, (state, action) => {
                state.pokemon_guide_loading = true;
                state.pokemon_guide_error = null;
            })
            .addCase(pokemonGuide.fulfilled, (state, action) => {
                state.pokemon_guide_loading = false;
                state.pokemon_guide = action.payload
            })
            .addCase(pokemonGuide.rejected, (state, action) => {
                state.pokemon_guide_loading = false;
                state.pokemon_guide_error = action.payload;
            })
    }
})


export const { clearPokemonJudge } = assistanceSlice.actions;
export default assistanceSlice.reducer