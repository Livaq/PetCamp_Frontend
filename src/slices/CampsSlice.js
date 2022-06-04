import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  camps: [],
};

export const campsSlice = createSlice({
  name: 'camps',
  initialState,
  reducers: {
    setCamps: (state, action) => {
      state.camps = action.payload;
    },
  },
});

export const { setCamps } = campsSlice.actions;

export default campsSlice.reducer;
