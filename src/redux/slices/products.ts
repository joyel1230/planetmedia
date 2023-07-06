import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductState {
  products: Array<{}>;
}

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  } as ProductState,
  reducers: {
    addProducts: (state, action: PayloadAction<Array<{}>>) => {
      state.products = [...action.payload];
    },
  },
});

export const { addProducts } = productSlice.actions;

export default productSlice.reducer;
