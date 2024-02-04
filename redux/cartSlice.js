import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const cartIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (cartIndex >= 0) {
        state.cartItems[cartIndex].quantity += 1;
      } else {
        const product = { ...action.payload, quantity: 1 };
        state.cartItems.push(product);
      }
    // state.cartItems.push(action.payload)
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
