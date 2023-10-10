import { configureStore } from "@reduxjs/toolkit";
import { productsSlice } from "./slices/Product-slice";
import { cartSlice } from "./slices/Cart";

export const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
  },
});
