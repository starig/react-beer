import {configureStore} from "@reduxjs/toolkit";
import beerReducer from "./slices/beerSlice";
import singleBeerReducer from "./slices/singleBeerSlice";


export const store = configureStore({
    reducer: {
        beer: beerReducer,
        singleBeer: singleBeerReducer,
    }
});