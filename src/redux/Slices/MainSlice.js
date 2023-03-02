import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        value: 55,
        name: 'Arsen'
    },
    reducers: {
        incremented: (state) => {
            state.value += 1;
        },
    },
})

export const {incremented} = mainSlice.actions;
export const mainSliceReducer = mainSlice.reducer;