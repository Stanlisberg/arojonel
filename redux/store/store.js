import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../cartSlice";
import productSlice from "../productSlice";
import chairSlice from "../chairSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    products: productSlice,
    chairs: chairSlice,
  },
  
});
