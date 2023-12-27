import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: Record<string, number>;
  count: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    count: 0,
    // Other cart-related state can be added here
  } as CartState,
  reducers: {
    incrementProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      state.items[productId] = (state.items[productId] || 0) + 1;

      state.count += 1;
    },
    decrementProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      if (state.items[productId] > 0) {
        state.items[productId] -= 1;
        state.count -= 1;
      }
    },
    // Additional actions can be added based on your requirements
  },
});

export const { incrementProduct, decrementProduct } = cartSlice.actions;
export const selectCartCount: any = (state: any) => state.cart.count;
export const selectCartItems: any = (state: any) => state.cart.items;
export const selectCartTotal: any = (state: any) => {
  const cartItems = selectCartItems(state);
  const products = state.products.items;
  let total = 0;
  Object.keys(cartItems).forEach((productId) => {
    const product = products[productId];
    const quantity = cartItems[productId];
    total += product.price * quantity;
  });
  return total;
};
export default cartSlice.reducer;
