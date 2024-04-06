import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const response = await fetch("http://localhost:3002/product", {
        next: { revalidate: 30 },
      });
      const data = await response.json();

      return data;
    } catch (error) {
      console.error("there is an error");
      throw error;
    }
  }
);


const initialState = {
  productData: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.productData = action.payload;
    });
  },
});

export default productSlice.reducer;
