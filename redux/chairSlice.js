import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchChairs = createAsyncThunk(
  "chairs/fetchChairs",
  async () => {
    try {
      const response = await fetch("http://localhost:3003/chair", {
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
  chairData: [],
};

const chairSlice = createSlice({
  name: "chairs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChairs.fulfilled, (state, action) => {
      state.chairData = action.payload;
    });
  },
});

export default chairSlice.reducer;
