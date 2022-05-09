import { createSlice } from "@reduxjs/toolkit";
import { types } from "../types/types";

const mainSlice = createSlice({
    name: "loading",
    initialState: {
        loading: false,
    },
    reducers: {
        setStartLoading: (state) => {
             state.loading = true;
        },
        setFinishLoading: (state) => {
            state.loading = false;
        }
    },
});

export const {  setStartLoading,  setFinishLoading} = mainSlice.actions;

export default mainSlice.reducer;
