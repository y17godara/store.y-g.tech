import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart/cartSlice";
import productsViewReducer from "@/redux/features/view/productsView";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsView: productsViewReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
