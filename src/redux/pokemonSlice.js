import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPokemonData, randBetween } from "../lib/pokemon";




export const getAsyncPokemon= createAsyncThunk(
    'pokemon/getPokemon',
    async(randomPokemonIds)=> {
        const promises = [];
        randomPokemonIds.map((id)=> promises.push(getPokemonData(id)))
        const pokemonResponses = await Promise.all(promises)
        return pokemonResponses;
    }
)


const pokemonSlice = createSlice({
    name:'pokemon',
    initialState:{
        score:0,
        loading:false,
        pokemons:[],
        misteryPokemon:null,
        reveal:false,
        userAnswer:''

    },
    reducers: {
        checkAnswer(state, action){
            state.userAnswer = action.payload;
            if(action.payload === state.misteryPokemon.nombre){
                state.score +=1;                
            }

            state.reveal = true;
        },
        nextQuestion(state){
            if(!state.reveal) return;           
            

        }
    },
    extraReducers:(builder)=> {
        builder
            .addCase(getAsyncPokemon.pending, (state)=> {
                state.loading = true;
                state.reveal = false
            })
            .addCase(getAsyncPokemon.fulfilled, (state, action)=> {
                state.loading = false;
                state.pokemons = action.payload
                const randomId = randBetween(0,4);
                state.misteryPokemon = state.pokemons[randomId]
            })
            .addCase(getAsyncPokemon.rejected, (state)=> {
                state.loading = false;
                
            })
    }
})


export const {checkAnswer}  = pokemonSlice.actions
export default pokemonSlice.reducer;