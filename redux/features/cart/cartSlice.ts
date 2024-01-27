import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CartState {
  items: Record<string, number>;
  products: Record<string, any>[];
  count: number;
}

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: {},
    products: [],
    count: 0,
    // Other cart-related state can be added here
  } as CartState,
  reducers: {
    incrementProduct: (state, action: PayloadAction<any>) => {
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
      } = action.payload; // payload is the product object

      state.items[productId] = (state.items[productId] || 0) + quantity;
      // state.count += 1;
      // check before adding cout is product with productID is already in cart
      if (!state.products.find((product) => product.productId === productId)) {
        state.count += 1;
      }

      const existingProductIndex = state.products.findIndex(
        (product) => product.productId === productId
      );

      if (existingProductIndex !== -1) {
        // If product already exists, update its quantity
        // console.info(
        //   "Product",
        //   productId,
        //   "already exists in cart. Updating quantity by",
        //   quantity,
        //   "units"
        // );
        state.products[existingProductIndex].quantity += quantity;
      } else {
        // If product doesn't exist, add it to the array
        // console.info("Adding new product to cart", action.payload);
        state.products.push(action.payload);
      }
    },

    decrementProduct: (state, action: PayloadAction<any>) => {
      const { productId, quantity } = action.payload;
      if (state.items[productId] > 0) {
        state.items[productId] -= quantity;
        state.count -= quantity;

        const existingProductIndex = state.products.findIndex(
          (product) => product.productId === productId
        );

        if (existingProductIndex !== -1) {
          // If product exists, update its quantity
          // console.info(
          //   "Product",
          //   productId,
          //   "already exists in cart. Updating quantity by",
          //   quantity,
          //   "unit"
          // );
          state.products[existingProductIndex].quantity -= quantity;
        }

        if (state.items[productId] === 0) {
          // If product quantity reaches 0, remove it from the cart
          // console.info(
          //   "Product",
          //   productId,
          //   "quantity reached 0. Removing product"
          // );
          delete state.items[productId];
          state.products = state.products.filter(
            (product) => product.productId !== productId
          );
        }
      }
    },
    // Additional actions can be added based on your requirements
  },
});

export const { incrementProduct, decrementProduct } = cartSlice.actions;
export const selectCartCount: any = (state: any) => state.cart.count;
export default cartSlice.reducer;
