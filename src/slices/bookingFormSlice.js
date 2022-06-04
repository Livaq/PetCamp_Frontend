import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booking: {
    petType: 'DOG',
    quantity: 1,
    city: '',
    street: '',
    startDate: '',
    endDate: '',
    campId: '',
  },
  pets: [],
  rooms: [],
};

export const bookingFormSlice = createSlice({
  name: 'bookingForm',
  initialState,
  reducers: {
    setBooking: (state, action) => {
      state.booking = action.payload;
    },
    addPet: (state, action) => {
      state.pets.push(action.payload);
    },
    setRoom: (state, action) => {
      state.rooms = action.payload;
    },
    clearPet: (state) => {
      state.pets = [];
    },
    clearFormData: (state) => {
      state.booking = initialState.booking;
      state.pets = initialState.pets;
    },
    removePet: (state, action) => {
      const index = state.pets.findIndex(
        (elem) => elem.id === action.payload.id
      );
      state.pets.splice(index, 1);
    },
  },
});

export const {
  setBooking,
  addPet,
  removePet,
  clearFormData,
  clearPet,
  setRoom,
} = bookingFormSlice.actions;

export default bookingFormSlice.reducer;
