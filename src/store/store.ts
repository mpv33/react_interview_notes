import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './features/counter/counterSlice';
import dataSlice from './features/user/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data:dataSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;