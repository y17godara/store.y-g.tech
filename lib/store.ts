import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "@/redux/features/cart/cartSlice";
import productsViewReducer from "@/redux/features/view/productsView";
import favProductReducer from "@/redux/features/favProduct/favProductSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    productsView: productsViewReducer,
    favProduct: favProductReducer,
    // Add other reducers as needed
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
