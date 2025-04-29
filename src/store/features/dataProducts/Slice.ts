import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { TProduct } from '../../../@types/products';

type TInitialState = {
  products: Array<TProduct>;
};

export const initialState: TInitialState = {
  products: [],
};

const productSlice = createSlice({
  name: 'formalizacao',
  initialState,
  reducers: {
    setDataProducts: (state, action: PayloadAction<TProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setDataProducts } = productSlice.actions;

export default productSlice.reducer;
