import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "John Doe",
  money: 1000,
  tickets: [],
  results: [],
  highScore: {
    ticket: { numbers: [5, 4, 3, 2, 1], euroNums: [1, 2] },
    winnings: 2,
    highlightedNumbers: { numbers: [1, 4], euroNums: [1] },
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.name = action.payload.name;
      state.money = action.payload.money;
      state.tickets = action.payload.tickets;
      state.results = action.payload.results;
    },
    updateUserTickets: (state, action) => {
      state.tickets = action.payload;
    },
    setMoney: (state, action) => {
      state.money = action.payload;
    },
    updateHighScore: (state, action) => {
      state.highScore = action.payload;
    },
  },
});

export const { updateProfile, updateUserTickets, setMoney, updateHighScore } =
  profileSlice.actions;
export default profileSlice.reducer;
