import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: [],

  reducers: {
    addTocart: (state, action) => {
      state.push(action.payload);
    },
    removeFromcart: (state, action) => {
      const id = action.payload.id;
      return state.filter((product) => product.id !== id);
    },
    cleareCart: () => {
      return [];
    },
  },
});

export const { addTocart, removeFromcart, cleareCart } = cartSlice.actions;
export default cartSlice.reducer;
