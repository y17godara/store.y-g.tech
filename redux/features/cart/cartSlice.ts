import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: Record<string, number>;
  count: number;
  data: Record<string, any>;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    data: {
      quantity: 0,
      id: "",
      productId: "",
      name: "",
      description: "",
      price: "",
      ratings: "",
      discount: "",
      image: "",
      category: "",
      company: "",
      addedBy: "",
    },
    count: 0,
    // Other cart-related state can be added here
  } as CartState,
  reducers: {
    incrementProduct: (state, action: PayloadAction<any>) => {
      // const productId = action.payload;
      const {
        id,
        productId,
        name,
        description,
        price,
        ratings,
        discount,
        image,
        category,
        company,
        addedBy,
        quantity,
      } = action.payload;

      // console.log("payload: ", action);
      state.items[productId] = (state.items[productId] || 0) + quantity;
      state.count += 1;

      // add quantity from state.items but other data from action.payload
      const createData = {
        id,
        productId,
        name,
        description,
        price,
        ratings,
        discount,
        image,
        category,
        company,
        addedBy,
        quantity: state.items[productId],
      };

      // console.log("CreatedData: ", createData);

      state.data = createData;
      // console.log("State Data: ", state.data);
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
export const selectCartData: any = (state: any) => state.cart.data;
export default cartSlice.reducer;
