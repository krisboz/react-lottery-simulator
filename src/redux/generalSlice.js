import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jackpot: 20000000,
  winningDraw: { nums: [], euroNums: [] },
  jackpotWinner: false,
};

const generalSlice = createSlice({
  name: "general",
  initialState,
  reducers: {
    updateGeneral: (state, action) => {
      state.jackpot = action.payload.jackpot;
      state.winningDraw = action.payload.winningDraw;
      state.jackpotWinner = action.payload.jackpotWinner;
    },
    updateJackpot: (state, action) => {
      state.jackpot = action.payload;
    },
    updateWinningDraw: (state, action) => {
      state.winningDraw = action.payload;
    },
    resetJackpot: (state, action) => {
      state.jackpot = 20000000;
    },
  },
});

export const { updateGeneral, updateJackpot, updateWinningDraw, resetJackpot } =
  generalSlice.actions;
export default generalSlice.reducer;
