import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tickets: [],
  results: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    updatePeople: (state, action) => {
      state.tickets = action.payload.tickets;
      state.results = action.payload.results;
    },
  },
});

export const { updatePeople } = peopleSlice.actions;
export default peopleSlice.reducer;
