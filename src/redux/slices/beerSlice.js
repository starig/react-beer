import {createSlice} from "@reduxjs/toolkit";
import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


export const fetchBeer = createAsyncThunk(
    'beer/fetchBeerStatus', async (params) => {
        const { page, searchValue } = params;
        const { data } = await axios.get(`https://api.punkapi.com/v2/beers?page=${page}&beer_name=${searchValue}`);
        return data;
    }
)

const initialState = {
    data: [],
    page: 1,
    searchValue: '_',
    isLoading: true,
    isFetching: false
}

export const beerSlice = createSlice({
    name: 'beers',
    initialState,
    reducers: {
        pagePlus: (state, action) => {
            state.page++;
        },
        pageMinus: (state, action) => {
            state.page--;
        },
        selectPage: (state, action) => {
            state.page = action.payload;
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload;
        }
    },
    extraReducers:(builder) => {
        builder.addCase(fetchBeer.fulfilled, (state, action) => {
            state.data = action.payload;
            state.isLoading = false;
            state.isFetching = false;
        });
        builder.addCase(fetchBeer.pending, (state, action) => {
            state.isFetching = true;
            state.isLoading = true;
            state.data = new Array(10);
        });
        builder.addCase(fetchBeer.rejected, state => {
            state.isLoading = true;
            state.data = [];
            state.isFetching = false;
            console.error('error');
        })
    }
});

export const { pagePlus, pageMinus, selectPage, setSearchValue } = beerSlice.actions;

export default beerSlice.reducer;