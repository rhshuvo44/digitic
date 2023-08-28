import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { contactServices } from "./contactServices";

const initialState = {
  contact: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
};

export const createdContact = createAsyncThunk(
  "contact/create-contact",
  async (enqData, thunkAPI) => {
    try {
      return await contactServices.createdContacts(enqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const contactSlice = createSlice({
  name: "contact",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createdContact.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createdContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.contact = action.payload;
      })
      .addCase(createdContact.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.error;
      });
  },
});

export default contactSlice.reducer;
