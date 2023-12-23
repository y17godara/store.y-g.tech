import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    count: 0,
    // Other cart-related state can be added here
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) {
        state.count -= 1;
      }
    },
    // Additional actions can be added based on your requirements
  },
});

export const { increment, decrement } = cartSlice.actions;
export const selectCartCount = (state: any) => state.cart.count;
export default cartSlice.reducer;
