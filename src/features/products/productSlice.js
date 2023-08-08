import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { productServices } from "./productServices";

const initialState = {
  products: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const getAllProducts = createAsyncThunk(
  "products/get-products",
  async (thunkAPI) => {
    try {
      return await productServices.getallProducts();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const productSlice = createSlice({
  name: "producr",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.products = action.payload;
      })
      .addCase(getAllProducts, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});

export default productSlice.reducer;
