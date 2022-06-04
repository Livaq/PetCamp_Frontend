import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  userName: '',
  userSurname: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setUserSurname: (state, action) => {
      state.userSurname = action.payload;
    },
    setUser: (state, action) => {
      state.userId = action.payload.id;
      state.userName = action.payload.name;
    },
    clearUser: (state) => {
      state.userId = initialState.userId;
      state.userName = initialState.userName;
    },
  },
});

export const { setUserId, setUserName, setUserSurname, setUser, clearUser } =
  userSlice.actions;

export default userSlice.reducer;
