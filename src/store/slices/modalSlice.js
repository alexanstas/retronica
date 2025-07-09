import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  newComponentModal: false,

};

const modalSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state[action.payload] = true;
    },
    closeModal: (state, action) => {
      state[action.payload] = false;
    },
    toggleModal: (state, action) => {
      state[action.payload] = !state[action.payload];
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
