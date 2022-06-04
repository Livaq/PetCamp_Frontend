import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  settings: {
    name: '',
    middlename: '',
    surname: '',
    email: '',
    city: '',
    street: '',
    phone: '',
  },
};

export const mySettingsSlice = createSlice({
  name: 'mySettings',
  initialState,
  reducers: {
    setMySettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const setMySettings = mySettingsSlice.actions;

export default mySettingsSlice.reducer;
