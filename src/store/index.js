
import { configureStore } from '@reduxjs/toolkit';

// slices
import modalReducer from '@slices/modalSlice';

const store = configureStore({
  reducer: {
    modals: modalReducer,
  },
});

export default store;
