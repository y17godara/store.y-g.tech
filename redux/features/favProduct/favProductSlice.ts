import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavProductState {
  items: Record<string, number>;
}

const favProductSlice = createSlice({
  name: "favProduct",
  initialState: {
    items: {},
  } as FavProductState,
  reducers: {
    handleFavProduct: (state, action: PayloadAction<string>) => {
      const productId: string = action.payload;
      console.log("before", state.items);
      // if productid is not in the fav list, add it
      if (!state.items[productId]) {
        state.items[productId] = 1;
      }
      // if productid is in the fav list, remove it
      else {
        delete state.items[productId];
      }
      console.log("after", state.items);
    },
  },
});

export const { handleFavProduct } = favProductSlice.actions;
export const selectFavProductItems: any = (state: any) =>
  state.favProduct.items;
export default favProductSlice.reducer;
