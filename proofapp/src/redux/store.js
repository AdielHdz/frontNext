import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './Features/PlaceHolder/usersSlice';
export const store = configureStore({
  reducer: {
    user: usersSlice
  },
});

