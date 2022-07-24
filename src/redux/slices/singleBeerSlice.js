import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSingleBeer = createAsyncThunk('singleBeer/fetchSingleBeerStatus',
    async (id) => {
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers/${id}`);
        console.log(data)
        return data;
});

const initialState = {
    beer: {
        name: '',
        image_url: '',
        tagline: '',
        description: '',
        abv: '',
        food_pairing: new Array(3),
    },
    isLoading: true,
}

export const singleBeer = createSlice({
    name: 'singleBeer',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchSingleBeer.fulfilled, (state, action) => {
            state.beer = action.payload[0];
            state.isLoading = false;
        });
        builder.addCase(fetchSingleBeer.pending, (state, action) => {
            state.isLoading = true;
        });
        builder.addCase(fetchSingleBeer.rejected, state => {
            state.isLoading = false;
            console.error('error');
        });
    }
})

export default singleBeer.reducer;