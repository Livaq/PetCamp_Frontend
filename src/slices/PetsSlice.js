import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  pets: [],
};

export const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setPets: (state, action) => {
      state.pets = action.payload;
    },
  },
});

export const { setPets } = petsSlice.actions;
export default petsSlice.reducer;
