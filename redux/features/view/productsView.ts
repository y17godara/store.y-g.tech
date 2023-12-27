import { createSlice } from "@reduxjs/toolkit";

type viewTypes = "list" | "grid" | "full";

const productsViewSlice = createSlice({
  name: "productsView",
  initialState: {
    view: "list" as viewTypes,
  },
  reducers: {
    setView: (state, action) => {
      state.view = action.payload;
    },
  },
});

export const { setView } = productsViewSlice.actions;
export const selectProductsView: any = (state: any) => state.productsView.view;
export default productsViewSlice.reducer;
