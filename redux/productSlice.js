import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Async thunk to fetch customers from the API
export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async () => {
        const response = await fetch("http://localhost:3002/product")
        const data = await response.json();
        return data;
    }
);

const initialState= {
  productData: [],
  productLoading: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.productLoading = true;
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.productData = action.payload;
        state.productLoading = false;
      });
  },
});

export default productSlice.reducer;
