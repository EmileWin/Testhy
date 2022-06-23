import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { gifs: [], offset: 0 };

const gifsSlice = createSlice({
  name: "gifs",
  initialState,
  reducers: {
    setGifs(state, action) {
      state.gifs = [...action.payload];
    },
    setOffset(state) {
      state.offset = state.offset + 12;
    },
  },
});

const store = configureStore({
  reducer: gifsSlice.reducer,
});

export const gifsActions = gifsSlice.actions;

export default store;
