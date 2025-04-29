import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../store/features/counter/counterSlice';
import productReducer from '../store/features/dataProducts/Slice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    product: productReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
