import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSliceReducer } from "./Slices/AuthSlice";
import { mainSliceReducer } from './Slices/MainSlice';

const reducers = combineReducers({
    main: mainSliceReducer,
    auth: authSliceReducer,
});

export const redux = configureStore({
    reducer: reducers
});